 //alert("hello! website checking")
 var gamePattern=[];
 
 var buttonColours=["red","blue","green","yellow"];

 var userClickedPattern=[];

 $(".btn").click(function (){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    //console.log(userClickedPattern);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1)

});


var level=0;

var ok=true;
$(document).keypress(function(){
   
    if(ok){
    nextSequence();

    $("h1").text("Level "+level);

     ok=false;
    }
   
})
//function 



function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        
        //console.log("sucess");
        if(gamePattern.length===userClickedPattern.length){
        setTimeout(function(){
            
                nextSequence();
            
        },1000)
        }
    }else{
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();

        $("body").addClass("game-over");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)
        $("h1").text("Uh oh! Game over, Press Any Key to Restart.")

        startOver();
    }
}
 function nextSequence(){
     userClickedPattern=[];level+=1;
     $("h1").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
      
    var randomChosenColour=buttonColours[randomNumber];
   
    gamePattern.push(randomChosenColour);
 
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
  
    animatePress(randomChosenColour);

    //level=level+1;

    //console.log(randomChosenColour);
    //console.log("random N is "+randomNumber);
}


function startOver(){
    level=0
    ok=true;
    gamePattern=[];
}

function playSound(name){

    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}


function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed")
  
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed")
  
    },100);
}


// to call the function
//nextSequence();
