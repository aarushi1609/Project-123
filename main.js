function setup()
{

    video = createCapture(VIDEO);
    video.size(300, 300);

    canvas = createCanvas(300, 300);
    
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
    }
}

function draw()
{
    
}