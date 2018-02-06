$(document).ready(function (){

    $("#list").click(function(){
        $(".list-div").show();
        $(".create-div").hide();
        $(".delete-div").hide();
        $.get("/list", function(data) {
            var msg = data;
            $("#notes").text(" ");
            for(let i=0;i<msg.length;i++){
                $("#notes").append(`<strong>Title</strong> : ${msg[i].title}  <strong>Body</strong> : ${msg[i].body}<br/>`);
            }
        });
    }) 

    $("#create").click(function(){
        $(".list-div").hide();
        $(".create-div").show();
        $(".delete-div").hide();
        $("#button").click(function(){
            $.ajax({
                url : "/new-note",
                method : "POST",
                data: JSON.stringify({title:$('#title').val(), body:$('#body').val()}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .done(function(){
                alert("note created");
            })
        })
    })

    $("#delete").click(function(){
        $(".delete-div").show();
        $(".list-div").hide();
        $(".create-div").hide();
        $("#button-del").click(function(){
            $.ajax({
                url : "/delete",
                method : "DELETE",
                data : JSON.stringify({title : $("#title-delete").val()}),
                headers : {
                    "Content-Type" : "application/json"
                }
            })
            .done(function(){
                alert("note deleted");
            })
        })
    })    
})
