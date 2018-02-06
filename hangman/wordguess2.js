
    var dictionary = ["hello","world"];
    var randomWordIndex = Math.floor(Math.random()*dictionary.length);
    var wordLength = dictionary[randomWordIndex].length;
    var dashWord = "-----------------";
    var preRandomIndex = -1;
    
    //var guessSubmit = document.querySelector('.guessSubmit');
    //var guessClass = document.querySelector('.guessClass');

    var chance = 3;
    function replaceAt(string, index, replace) {
      return string.substring(0, index) + replace + string.substring(index + 1);
    }

    str=dashWord.slice(0,dictionary[randomWordIndex].length);
    for(i=1;i<=2;i++)
      {
        randomIndex=Math.floor(Math.random()*wordLength);
        if(preRandomIndex==randomIndex)
           randomIndex++;
        //str = dictionary[randomWordIndex];
        //str=dashWord.slice(0,dictionary[randomWordIndex].length);
        str=replaceAt(str,randomIndex,dictionary[randomWordIndex][randomIndex]);
        preRandomIndex=randomIndex;
      }

    //document.write(str);
    //guessClass.addEventListener('click',guessSubmit);

    (function guessSubmit()
    {
      /*console.log("in function");
      if(!(((guessField.charCodeAt()>=65)&&(guessField.charCodeAt()<=90))||((guessField.charCodeAt()>=97)&&(guessField.charCodeAt()<=122))))
           {
            alert("enter a character");
           }
      
      else*/
           
          while((chance)&&(str!=dictionary[randomWordIndex]))
          {
          guessField = prompt(str);
          guessField = guessField.toLowerCase();
          var check=0;
          for(var i=0; i<dictionary[randomWordIndex].length; i++)
          {
            
            if(guessField==dictionary[randomWordIndex][i])
            {
              str=replaceAt(str,i,guessField);
              check=1;
            }  
          }

          if(check==0)
          {
            chance--;
            alert("wrong character. You have "+chance+" chances left");

          }
          }
          

          if(str==dictionary[randomWordIndex])
            alert("congrats");
        
    }
)();

