
var initmaskcolor = document.getElementById("mask").style.backgroundColor;

console.log(initmaskcolor);
console.log(window.innerWidth);
console.log(window.outerWidth);
function mediaQuery(x){
  xx = x;
  var h = document.getElementById("H");

var MLinks = document.getElementsByClassName("link");
  if(window.pageYOffset>35){
    for(c =0;c< MLinks.length; c++){
    }
    h.style.background= "rgb(39, 72, 91)";;
  }
  else{
    h.style.background= "rgba(0, 0, 0,0)";
  }

}

var xx;
var x = window.matchMedia("(max-width: 900px)");
mediaQuery(x);
x.addListener(mediaQuery);

function scrollfunction(){

  var h = document.getElementById("H");
  var MLinks = document.getElementsByClassName("link");

  
  var body = document.getElementById("body");
  
  var mask = document.getElementById("mask");
  
  var top = document.getElementById("top");

  var initTransparency = 0.397;
  
  var derivedTransparency = 0.0;
  
  var derivedMovement = 0.0;

  derivedMovement = (window.pageYOffset/(body.offsetHeight));

    //sec1.style.bottom = `${((window.pageYOffset-body.offsetHeight)/((body.offsetHeight)))*100}px`;


  console.log(derivedMovement);
  derivedTransparency = (window.pageYOffset/(body.offsetHeight));

  //top.style.top = `${derivedMovement*400}px`;
 
  
  if(derivedTransparency>initTransparency){
   // mask.style.backgroundColor = `rgba(0,0,0,${derivedTransparency})`;
  }
  else{
  // mask.style.backgroundColor = `rgba(0,0,0,${initTransparency})`;
  }
  
    if(window.pageYOffset>h.offsetHeight){
        h.style.background= "rgb(39, 72, 91)";
      }
  
    else{
      h.style.borderBottom ="none";
      h.style.background= "rgba(0, 0, 0,0)";
	 
    }
}

window.onscroll = function(){
  scrollfunction();
};
setInterval(function(){scrollfunction();},500);


var showingBasicDetails=false;

function ShowBasicDetails(){
	  var details = document.getElementById("BasicDetails");
    var body = document.getElementById("body");
    var top = document.getElementById("top");
    
    
	  if(!showingBasicDetails){
		  showingDetails = true;
      details.style.display = "flex";
      body.style.overflowY = "hidden";
	  }
	  else{
		  showingBasicDetails = false;
      details.style.display = "none";
      body.style.overflowY = "auto";
	  }
	  
};

var showingProDetails=false;

function ShowProDetails(){
	  var details = document.getElementById("ProDetails");
    var body = document.getElementById("body");
    
    
	  if(!showingProDetails){
		  showingProDetails = true;
      details.style.display = "flex";
      body.style.overflowY = "hidden";
	  }
	  else{
		  showingProDetails = false;
      details.style.display = "none";
      body.style.overflowY = "auto";
	  }
	  
};
function ScrollingTo(elementname){
  var elem = document.getElementById(elementname);
  elem.scrollIntoView();
};

