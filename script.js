

// document.getElementById('JIDAR_BLACK');
// document.getElementById('MAMAR');
// document.getElementById('BIRD');
// document.getElementById('LOSE');
// var score=0;

// setInterval( "MamarMove( )",4000);
// function MamarMove(){	
// score++;  
// var ALMAMAR=document.getElementById('MAMAR');
// var ALJIDAR=document.getElementById('JIDAR_BLACK');
// var RANDOM=Math.random();
// var MamarChangePosition=(parseInt( window.getComputedStyle(ALMAMAR).getPropertyValue("top") )*RANDOM)-115;
// var JidarChangePosition=(parseInt( window.getComputedStyle(ALJIDAR).getPropertyValue("top") )*RANDOM)-120;
// ALMAMAR.style.top=MamarChangePosition;
// ALJIDAR.style.top=JidarChangePosition;
// }


// setInterval( "KoraDown( )",10 );
// function KoraDown(){
	// var jumping=0;
	// document.getElementById('SOUND1').play();
	
	// if(jumping==0){
	// var ALJIDAR=document.getElementById('JIDAR_BLACK');
    // var ALMAMAR=document.getElementById('MAMAR');
	// var ALBIRD= document.getElementById('BIRD');	   
		   
	// var ALJIDARLEFT=parseInt( window.getComputedStyle(ALJIDAR).getPropertyValue("left") ); 
	// var ALKORATOP=parseInt( window.getComputedStyle(ALBIRD).getPropertyValue("top") ); 
	
	// var MAMARleft=parseInt( window.getComputedStyle(ALMAMAR).getPropertyValue("left") ); 
	// var ALMAMARTOP=parseInt( window.getComputedStyle(ALMAMAR).getPropertyValue("top") ); 
	 // let ALmamarTopUp=ALMAMARTOP-150;
	// var BIRDTop=parseInt( window.getComputedStyle(ALBIRD).getPropertyValue("top") );
	// ALBIRD.style.top=(BIRDTop+2)+"px" ;
   // if(    BIRDTop>=(-200)  || BIRDTop<=(-690)   ||  (  (ALJIDARLEFT<=18 && 4<=ALJIDARLEFT)   &&    ( (ALmamarTopUp<ALKORATOP && ALKORATOP<ALmamarTopUp+30) || ALMAMARTOP<ALKORATOP+14  )  )  ) {
   
    // ALBIRD.style.top=-400+"px";
	 // document.getElementById('SOUND2').play();
	 // document.getElementById('SOUND1').pause();
	 // alert("GAME OVER ,YOUR SCORE IS "+ (score) );
	 // location.reload();
// }	
	// }
// }

document.getElementById('JIDAR_BLACK');
document.getElementById('MAMAR');
document.getElementById('BIRD');
document.getElementById('LOSE');
var score=0;

setInterval( "MamarMove( )",4000);
function MamarMove(){	
score++;  
var ALMAMAR=document.getElementById('MAMAR');
var RANDOM=Math.random();
var MamarChangePosition=(parseInt( window.getComputedStyle(ALMAMAR).getPropertyValue("top") )*RANDOM)-115;
ALMAMAR.style.top=MamarChangePosition;
}


setInterval( "KoraDown( )",10 );
function KoraDown(){
	var jumping=0;
	document.getElementById('SOUND1').play();
	
	if(jumping==0){
	var ALJIDAR=document.getElementById('JIDAR_BLACK');
    var ALMAMAR=document.getElementById('MAMAR');
	var ALBIRD= document.getElementById('BIRD');	   
		   
	var ALJIDARLEFT=parseInt( window.getComputedStyle(ALJIDAR).getPropertyValue("left") ); 
	var ALKORATOP=parseInt( window.getComputedStyle(ALBIRD).getPropertyValue("top") ); 
	
	var MAMARleft=parseInt( window.getComputedStyle(ALMAMAR).getPropertyValue("left") ); 
	var ALMAMARTOP=parseInt( window.getComputedStyle(ALMAMAR).getPropertyValue("top") ); 
	 let ALmamarTopUp=ALMAMARTOP-150;
	var BIRDTop=parseInt( window.getComputedStyle(ALBIRD).getPropertyValue("top") );
	ALBIRD.style.top=(BIRDTop+2)+"px" ;
   if(   BIRDTop>=(-138)  || BIRDTop<=(-590)    ||  (  (ALJIDARLEFT<=18 && 4<=ALJIDARLEFT)   &&     (  ALMAMARTOP<BIRDTop+20     || ALmamarTopUp>BIRDTop-4      )  )   ) {
   
    ALBIRD.style.top=-400+"px";
	 document.getElementById('SOUND2').play();
	 document.getElementById('SOUND1').pause();
	 alert("GAME OVER ,YOUR SCORE IS "+ (score) );
	 location.reload();
}	
	}
}

function KoraJump(){
		var ALJIDAR=document.getElementById('JIDAR_BLACK');
		var jumping=1;
		var jumpcount=0;
	   var ALBIRD= document.getElementById('BIRD');	   
	   var BIRDIMG= document.getElementById('birdImg');	   
       var jumpInterval= setInterval(function (){ 
	   var KoraChangePosition=( parseInt( window.getComputedStyle(ALBIRD).getPropertyValue("top") )-4)+"px";
       ALBIRD.style.top=KoraChangePosition; 
       BIRDIMG.src="bird2.png";	   
	   if(jumpcount>25){
		   clearInterval(jumpInterval);
		   jumping=0;
		   jumpcount=0;
		   BIRDIMG.src="bird1.png";	
	   }
	     jumpcount++;
    	},10);
};

