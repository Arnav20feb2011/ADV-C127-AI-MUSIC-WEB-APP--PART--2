song1="";
song2="";
function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    
}

function preload(){
song1=loadSound("song1.mp3");
song2=loadSound("song2.mp3");
}

function draw(){
    image(video, 0, 0,400,400);
    song1.play();
document.getElementById("song").innerHTML="Falling-Trevor Danial";

}

