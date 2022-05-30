canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
nasaMarsImgArray = ["nasa_image_1.jpg","nasa_image_2.jpg", "nasa_image_3.jpg","nasa_image_4.jpg"];
randomNumber = Math.floor(Math.random() * 4);
console.log(randomNumber);

rover_width = 100;
rover_height = 90;
rover_X = 10;
rover_Y = 10;

background_image = nasaMarsImgArray[randomNumber];
console.log("Background image is = " + background_image);
rover_image = "rover.png";

function add(){

    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    
    background_imgtag.src = background_image;

    rover_imgtag = new Image();
    rover_imgtag.onload = uploadRover;
    
    rover_imgtag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgtag, rover_X, rover_Y, rover_width, rover_height);

}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == "38"){
        up();
        console.log("up");
    }

    if(keyPressed == "40"){
        down();
        console.log("down");
    }

    if(keyPressed == "37"){
        left();
        console.log("left");
    }

    if(keyPressed == "39"){
        right();
        console.log("right");
    }
}

function up(){
    if(rover_Y >= 0){
        rover_Y = rover_Y - 10;
        console.log("When up arrow is pressed: x =" + rover_X + "y = " + rover_Y);
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(rover_Y <= 500){
        rover_Y = rover_Y + 10;
        console.log("When up arrow is pressed: x =" + rover_X + "y = " + rover_Y);
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(rover_X <= 700){
        rover_X = rover_X + 10;
        console.log("When up arrow is pressed: x =" + rover_X + "y = " + rover_Y);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(rover_X >= 0){
        rover_X = rover_X - 10;
        console.log("When up arrow is pressed: x =" + rover_X + "y = " + rover_Y);
        uploadBackground();
        uploadRover();
    }
}