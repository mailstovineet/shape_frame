function preload(){
    
}

function setup(){
    canvas=createCanvas(300,275);
    canvas.position(612.5,200);
    video=createCapture(VIDEO);
    video.hide();
    color_1="";
}

function draw(){
    image(video,0,0,300,275);
    tint(color_1);
    triangle(55,35,42,79,123,80);
    triangle(204,173,192,132,290,220);
    rect(5,9,80,159);
    rect(108,178,111,136);
    circle(35,40,11);
    circle(48,92,15);
}

function take_snapshot(){
    save(myfilter.jpg);
}

function change_tint(){
    color_1=document.getElementById("tint_input").value;
}