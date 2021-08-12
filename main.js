canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
mars_image_array = ["MARS_IMAGE_1.jfif" , "MARS_IMAGE_2.jfif" , "MARS_IMAGE_3.jpg" , "MARS_IMAGE_4.jpg" , "MARS_IMAGE_5.jpg" , "MARS_IMAGE_6.jpg" , "MARS_IMAGE_7.jpg" , "MARS_IMAGE_8.jpg" , "MARS_IMAGE_9.jpg" , "MARS_IMAGE_10.jpg" , "MARS_IMAGE_11.jpg"];
random_number = Math.floor(Math.random()*11);
console.log(random_number);
background_image = mars_image_array[random_number];
console.log("background image = " + background_image);
rover_image = "rover.png";
rover_height = 90;
rover_width = 100;
rover_x = 10;
rover_y = 10;
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height);
}
function uploadRover() {
    ctx.drawImage(rover_imgTag , rover_x , rover_y , rover_width , rover_height);
}
window.addEventListener("keydown" , my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == 37) {
        left();
        console.log("left");
    }
    if(keyPressed == 38) {
        up();
        console.log("up");
    }
    if(keyPressed == 39) {
        right();
        console.log("right");
    }
    if(keyPressed == 40) {
        down();
        console.log("down");
    }
}
function up() {
    if(rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow key is pressed, x = " + rover_x + " , y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down() {
    if(rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When down arrow key is pressed, x = " + rover_x + " , y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right() {
    if(rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When right arrow key is pressed, x = " + rover_x + " , y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left() {
    if(rover_x >= 0) { 
        rover_x = rover_x - 10;
        console.log("When left arrow key is pressed, x = " + rover_x + " , y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}