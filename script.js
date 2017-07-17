/*variables*/
var isStrict=false,
colorChain=[],// chain proposed by the game
playerChain=[],// chain made by Player
colorTab=["#top-left","#top-right","#bottom-left","#bottom-right"]
level=1,
// animation
audio=[document.getElementById("audio1")
,document.getElementById("audio2")
,document.getElementById("audio3")
,document.getElementById("audio4")
]
;

//functions
/* strict function*/
$("#strict-btn").click(function(event) {
  if (isStrict){
    isStrict=false;
    $("#isstrict").text('');
  }
  else {
    isStrict=true;
    $("#isstrict").text('s');
  }
});
/*Start button */
$("#start-btn").click(function(event) {
  /* Act on the event */
  level=1;$("#level").text(level);
  clearInterval(int);
  colorChain=createColorChain(20);
  playerChain=[];
  animateColorChain(colorChain,level);
  console.log(colorChain);

});



// top-left
$(colorTab[0]).mousedown(function(event) {
  playerChain.push(colorTab[0]);
  $(this).css('background-color', '#1E824C');
  console.log(playerChain+"  compare   :"+testChain(colorChain,playerChain));
  audio[0].play();

  /*   handle mousedown event*/
  if(testChain(colorChain,playerChain))
  {if (level===playerChain.length){if (level!==20){level++;
    $("#level").text(level);  animateColorChain(colorChain,level);
    playerChain=[];}
    else {
      $("#mymodal").modal("show");
    }

  }

}
else if(isStrict){//makeError();
  level=1;makeError();$("#level").text(level);
  playerChain=[];
  colorChain=createColorChain(20);animateColorChain(colorChain,level);
}
else { clearInterval(int);//makeError();
  animateColorChain(colorChain,level);
  playerChain=[];makeError();

}

});
$(colorTab[0]).mouseup(function(event) {

  $(this).css('background-color', '#2ECC71');

});

// top-right
$(colorTab[1]).mousedown(function(event) {
  playerChain.push(colorTab[1]);
  $(this).css('background-color', '#FFFF00');

  console.log(playerChain+"  compare   :"+testChain(colorChain,playerChain));
  audio[1].play();

  /**    */
  if(testChain(colorChain,playerChain))
  {if (level===playerChain.length){if (level!==20){level++;
    $("#level").text(level);  animateColorChain(colorChain,level);
    playerChain=[];}
    else {
      $("#mymodal").modal("show");

    }

  }

}
else if(isStrict){//makeError();
  level=1;$("#level").text(level);
  playerChain=[];makeError();
  colorChain=createColorChain(20);animateColorChain(colorChain,level);
}
else {makeError(); clearInterval(int);//makeError();
  animateColorChain(colorChain,level);
  playerChain=[];

}


});

$(colorTab[1]).mouseup(function(event) {

  $(this).css('background-color', '#F7CA18');

});

// bottom-left
$(colorTab[2]).mousedown(function(event) {
  playerChain.push(colorTab[2]);
  $(this).css('background-color', '#446CB3');
  audio[2].play();

  console.log(playerChain+"  compare   :"+testChain(colorChain,playerChain));
  /*-------------------*/
  if(testChain(colorChain,playerChain))
  {if (level===playerChain.length){if (level!==20){level++;
    $("#level").text(level);  animateColorChain(colorChain,level);
    playerChain=[];}
    else {
      $("#mymodal").modal("show");

    }

  }

}
else if(isStrict){//makeError();
  level=1;makeError();$("#level").text(level);
  playerChain=[];
  colorChain=createColorChain(20);animateColorChain(colorChain,level);
}
else { clearInterval(int);makeError();
  animateColorChain(colorChain,level);
  playerChain=[];

}

});

$(colorTab[2]).mouseup(function(event) {

  $(this).css('background-color', '#22A7F0');

});
// bottom-right
$(colorTab[3]).mousedown(function(event) {
  playerChain.push(colorTab[3]);
  $(this).css('background-color', '#96281B');
  audio[3].play();

  console.log(playerChain+"  compare   :"+testChain(colorChain,playerChain));
  /*-----------------------------*/
  if(testChain(colorChain,playerChain))
  {if (level===playerChain.length){if (level!==20){level++;
    $("#level").text(level);  animateColorChain(colorChain,level);
    playerChain=[];}
    else {
      $("#mymodal").modal("show");

    }

  }

}
else if(isStrict){makeError();
  level=1;$("#level").text(level);
  playerChain=[];
  colorChain=createColorChain(20);animateColorChain(colorChain,level);
}
else { clearInterval(int);makeError();
  animateColorChain(colorChain,level);
  playerChain=[];

}


});

$(colorTab[3]).mouseup(function(event) {

  $(this).css('background-color', '#F22613');

});
/* create a random color chain*/
var int;
function createColorChain(length) {
  var array=[]

  for (var i = 0; i < length; i++) {
    array[i]=colorTab[Math.floor(Math.random()*4)];
  }
  return array;
}
/* animate the color chain  */
function animateColorChain (array,level)
{
  array=array.slice(0, level);
  var i=0;
  int=setInterval(function(){

    if(i===array.length-1){

      $(array[i]).css('opacity', '0.6');
      playAudio(array[i]);
      setTimeout(
        function (){$(array[i]).css('opacity', '1');clearInterval(int);},1500);


      }else {
        $(array[i]).css('opacity', '0.6');
        playAudio(array[i]);
        i++;
        setTimeout(function(){

          $(array[i-1]).css('opacity', '1');

        },1500 )


      }

    }

    ,2000);

  }



  /*test if there is no wrong player start chain*/
  function testChain(cChain,pChain)
  {
    var len=pChain.length;
    var b=true;
    cChain=cChain.slice(0, len);
    for (var i = 0; i < len; i++) {
      console.log("cChain : "+"pChain :  "+pChain);
      if(cChain[i]!=pChain[i]) {return false;}
    }
    return true;
  }
  /* error*/
  function makeError(){
    $("#error").text("!!");
    document.getElementById("audioE").play()
    setTimeout(function(){

      $("#error").text("");

    },3000);

  }

  function playAudio(arr){
    switch (arr) {
      case "#top-left":audio[0].play();break;
      case "#top-right":audio[1].play();break;
      case "#bottom-left":audio[2].play(); break;
      case "#bottom-right":audio[3].play();break;
    }

  }
