var cat = 0;
var dog = 0;
var crow= 0;
var duck = 0;
function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    clasifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/6YMky4v3w/model.json",modelReady);
}
function modelReady(){
    clasifier.classify(gotResults);
}
function gotResults(error, results){
    if (error) {
        console.log(error);        
    } else {
        console.log(results);
        red = (Math.random()*255)+1;
        green = (Math.random()*255)+1;
        blue = (Math.random()*255)+1;
        document.getElementById("no_o_times").innerHTML = "No of times barking was detected: " + dog + " No of times meowing was detected: " + cat + " No of times quacking was detected: " + duck+ " No of times cawing was detected: " + crow;
        document.getElementById("audioName").innerHTML = "Audio detected: " + results[0].label;
        document.getElementById("audioName").style.color = "rgb("+red+", "+blue+"," + green+")";
        document.getElementById("no_o_times").style.color = "rgb("+red+", "+blue+"," + green+")";
        img = document.getElementById("image");
        if (results[0].label == "Barking"){
            img.src = "https://clipart-library.com/images/pc7rqMoLi.gif";
            dog = dog+1;
            console.log("Barking detected.");
        }else if (results[0].label == "Meowing"){
            img.src = "https://i.gifer.com/NAk7.gif";
            console.log("Meowing detected.");
            cat = cat +1;
        }else if (results[0].label == "Quacking"){
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-bCWH2758_7Iy46qM3Jk5vjzXZg2ngqKl1uP7Zyj44Nl8uB_gnXzTiS64OE_g_lHvras&usqp=CAU";
            duck = duck +1;
            console.log("Quacking detected.");
        }else if (results[0].label == "Cawing"){
            img.src = "https://i.gifer.com/origin/6e/6efac6819baea00b3a051c28742cba12_w200.gif";
            crow = crow +1;
            console.log("Cawing detected.");
        } else{
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGUscANDD4WOOEnqAJqgeufYLxYhZmt3iQw&usqp=CAU";
        }
    }
}