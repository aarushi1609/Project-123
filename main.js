leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup()
{

    video = createCapture(VIDEO);
    video.size(300, 300);

    canvas = createCanvas(500, 300);
    
    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on("pose", gotResults);
}

function modelLoaded()
{
    console.log("Model Loaded");
}

function gotResults(results)
{
    if(results.length > 0)
    {
        console.log(results);
       leftWristX = results[0].pose.leftWrist.x;
       rightWristX = results[0].pose.rightWrist.x;
       difference = floor(leftWristX - rightWristX);
       console.log("Left: " + leftWristX, "Right: " + rightWristX, "Difference: " + difference);
       document.getElementById("font_size").innerHTML = difference;
    }
}

function draw()
{
    background("#92B4EC");
    fill("pink");
    text("Aarushi", 10, 100);
    textSize(difference);
}