function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    clasifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/1uM2D7t3F/model.json",modelReady);
}
function modelReady(){
    clasifier.classify(gotResults);
}
function gotResults(error, results){
    if (error) {
        console.log(error);        
    } else {
        console.log(results);
    }
}