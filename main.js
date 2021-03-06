objects = [];
status = "";

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "STATUS: DETECTING OBJECTS";
    objectName = document.getElementById("objectName").value;
}

function modelLoaded(){
    console.log("MODEL LOADED");
    status = true;   
}

function draw(){
    image(video, 0, 0, 480, 380)
}