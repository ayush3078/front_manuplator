
leftwristx=0;
rightwristx=0;
diffrence=0;

function setup() {
    canvas=createCanvas(490,490);
    canvas.position(560, 110);
    video=createCapture(VIDEO);
    video.size(550, 550);
    posenet=ml5.poseNet(video, modelLoded);
    posenet.on('pose', gotPose);
}
function draw() {
    background('#ffff00');
  
   textSize(diffrence);
   fill('red');
   text('peter', 80, 40, diffrence, diffrence);
}
function modelLoded() {
    console.log("Its working");
}
function gotPose(results) {
    if(results.length>0) {
        console.log(results);
       
        rightwristx=results[0].pose.rightWrist.x;
        leftwristx=results[0].pose.leftWrist.x;
        diffrence=Math.floor(leftwristx-rightwristx);
        console.log("Difference="+ diffrence);
    }
}

