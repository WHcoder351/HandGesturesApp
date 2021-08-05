Pre1 = ""
Webcam.set({
    width: "250",
    height: "250",
    image_format: "png",
    png_quality: 90
});
Cam = "CameraInput";
Webcam.attach(Cam);

function Cap(){
    Webcam.snap(function (data_uri){
        document.getElementById("ToBClassified").innerHTML = '<img id = "Final" src = "' + data_uri + '"/>';
    });
}

console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/QpYhOihgJ/model.json', mL);

function mL() {
    console.log("Model Loaded")
}
