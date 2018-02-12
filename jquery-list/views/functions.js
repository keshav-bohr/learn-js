$(document).ready(function(){
    window.listingText = listingText;
    window.display = display;
    var arr = [];
    var obj = {};


    // adding the list to array
    function listingText(){
        obj = document.getElementById("listContent").value;
        arr.unshift(obj);
         display(arr);
    }
    

    // display the list
    function display(arr){
        $("#listText").text(" ");
        $.each(arr,function(index){
            var buttons = $('<button type="button" id='+index +' class="delete_list" >X</button>'); 
            buttons.appendTo('#listText'); 
            $("#listText").append("   "+ arr[index] + "<br/><br/>");
        });
    }


    // delete function
    $(document).on('click', '.delete_list', function(){
        index = $(this).attr('id');
        arr.splice(index,1);
        display(arr);
    })
})
