Webcam.set({
    width: 400,
    height: 300,
    image_format: 'png',
    png_quality: 100,
    dest_width: 380,
    dest_height: 280
});
camera = document.getElementById("camera");
Webcam.attach(camera);
function capture() {
    Webcam.snap(
        function(image_url) {
            document.getElementById("result").innerHTML = "<img id='captured_image' src='"+image_url+"'>";
        }
    );
}
console.log("ml5 version: ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3CA8-yyaP/model.json", modelLoaded)
function modelLoaded() {
    console.log("Model Loaded!")
}
function identify() {
    new_img = document.getElementById("captured_image");
    classifier.classify(new_img, getResult);
}
function getResult(error, results) {
    if (error) {
        console.error();
    }
    else {
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("accuracy_percentage").innerHTML = (results[0].confidence * 100).toFixed(3)  + " %";
    }
}