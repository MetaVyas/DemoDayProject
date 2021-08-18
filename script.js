var titleBack;
var font;
var smokey;
var title;
var campfire;


var swch = 0;
var smokeyX = 200;
var smokeyY = 200;
var score = 0;
var fires = [];
var interval = 5000;


function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent("smokeyGame");
    background(255, 255, 255);
    titleBack = loadImage("images/grassbackground.png");
    title = loadImage("assets/smokeytitle.jpg");
    font = loadFont("assets/pixelated.ttf");
    smokey = loadImage("assets/smokey.gif");
    campfire = loadImage("assets/campfire.gif");

    setInterval(function(){ append(fires, new theFire()); }, interval);
    setInterval(function(){ subtractTime(interval); }, 10000);

  }
  function subtractTime(){
    if(interval/1.5>=1000){
      interval/=1.5;
    }
    else{
      interval = 1000;
    }
  }
  
      class theFire{
        constructor(){
           this.fireX = 50+Math.floor(401*Math.random());
           this.fireY = 50+Math.floor(401*Math.random());
       }
       drawFire(){
         console.log(this);
          image(campfire,this.fireX,this.fireY);
       }
       
      }
      
      
      
      function draw() {

        textFont(font);
        
        if(swch != 0){
          image(titleBack,0,0);
        for(var l = 0; l< fires.length; l++){
          fires[l].drawFire();
        }

    if ((keyIsDown(LEFT_ARROW)||keyIsDown(65))&&smokeyX>=5) {
        smokeyX -= 5;
      }
      
      if ((keyIsDown(RIGHT_ARROW)||keyIsDown(68))&&smokeyX<=400) {
        smokeyX += 5;
      }
      
      if ((keyIsDown(UP_ARROW)||keyIsDown(87))&&smokeyY>=5) {
        smokeyY -= 5;
      }
      
      if ((keyIsDown(DOWN_ARROW)||keyIsDown(83))&&smokeyY<=400) {
        smokeyY += 5;
      }
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
        fill(255,200,0);
        text("Smokey's",250,100);
        text("Quest",250,200);
        text("Click to Start!",250,400);
    }
 }
  
 function mouseClicked() {
     if(swch == 0){
         swch = 1;
         image(titleBack,0,0);
    }

 }
