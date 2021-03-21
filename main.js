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
classifier = ml5.imageClassifier("", modelLoaded)
function modelLoaded() {
    console.log("Model Loaded!")
}