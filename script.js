let back;
let font;
let smokey;
let title;

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent("project");
    background(255, 255, 255);
    back = loadImage("images/grassbackground.png");
    title = loadImage("assets/smokeytitle.jpg");
    font = loadFont("assets/pixelated.ttf");
    smokey = loadImage("assets/smokey.gif");
 }
 
 let swch = 0;
 let smokeyX = 200;
 let smokeyY = 200;
 let score = 0;
  
 function draw() {
     textFont(font);
    if(swch != 0){
    image(back,0,0)
    image(smokey,smokeyX,smokeyY,100,100);
    
    fill(0);
    rect(0,0,50,50);
    fill(255);
    textSize(15);
    textAlign(LEFT);
    text("Score:",5,15);
    textAlign(CENTER);
    text(score,25,30)
    }
    else{
        image(title,0,0);
        textAlign(CENTER);
        textSize(75);
        fill(random(100,255),random(0,255),0);
        text("Click to Start!",250,400);
    }
 }
  
 function mouseClicked() {
     if(swch == 0){
         swch = 1;
         image(back,0,0);
    }

 }

 let fire = class{
     let fireX;
     let fireY;
     constructor(){
         fireX = random(50,500);
         fireY = random(50,500);
     }
    }
 