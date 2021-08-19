var titleBack;
var font;
var smokey;
var title;
var campfire;


var swch = 0;
var smokeyX = 250;
var smokeyY = 250;
var score = 0;
var fires = [];
var interval = 5000;
var highScore = 0;

function setup() {
  frameRate(30);
  imageMode(CENTER);
    var canvas = createCanvas(500, 500);
    canvas.parent("smokeyGame");
    background(255, 255, 255);
    titleBack = loadImage("images/grassbackground.png");
    title = loadImage("assets/smokeytitle.jpg");
    font = loadFont("assets/pixelated.ttf");
    smokey = loadImage("assets/smokey.gif");
    campfire = loadImage("assets/campfire.gif");

    setInterval(function(){ append(fires, new theFire()); }, interval);
  }
  
      class theFire{
        constructor(){
           this.fireX = 50+Math.floor(401*Math.random());
           this.fireY = 50+Math.floor(401*Math.random());
       }
       drawFire(){
          image(campfire,this.fireX,this.fireY);
       }
       intersect(playerX,playerY){
          var x1 = playerX-50;
          var x2 = playerX+50;
          var y1 = playerY-50;
          var y2 = playerY+50;
          if((x1<this.fireX+12.5)&&(x2>this.fireX-12.5)&&(y1<this.fireY+12.5)&&(y2>this.fireY-12.5)){
            score ++;
            this.fireX = 50+Math.floor(401*Math.random());
            this.fireY = 50+Math.floor(401*Math.random());
            interval += 3000;
            console.log(interval);
          }
          else{
          }
        }
        removeFlames(){
        this.fireX = 600;
        this.fireY = 600; 
        }
      }
      
      
      
      function draw() {
        textFont(font);
        
        if(swch != 0){
          image(titleBack,250,250);
        for(var l = 0; l< fires.length; l++){
          fires[l].drawFire();
          fires[l].intersect(smokeyX,smokeyY);
        }

    if ((keyIsDown(LEFT_ARROW)||keyIsDown(65))&&smokeyX>=25) {
        smokeyX -= 8;
      }
      
      if ((keyIsDown(RIGHT_ARROW)||keyIsDown(68))&&smokeyX<=450) {
        smokeyX += 8;
      }
      
      if ((keyIsDown(UP_ARROW)||keyIsDown(87))&&smokeyY>=25) {
        smokeyY -= 8;
      }
      
      if ((keyIsDown(DOWN_ARROW)||keyIsDown(83))&&smokeyY<=450) {
        smokeyY += 8;
      }
      image(smokey,smokeyX,smokeyY,100,100);
      
      fill(0);
    rect(0,0,50,50);
    fill(255);
    textSize(15);
    textAlign(LEFT);
    text("Score:",5,15);
    textAlign(CENTER);
    text(score,25,30);
    text("High:"+highScore, 25,45);
    if (keyIsDown(81)){
      swch = 2;
    }
    else if(swch == 2){
      if(score>highScore){
        highScore = score;
      }
      score = 0;
      for(var l = 0; l< fires.length; l++){
        fires[l].removeFlames();
      }
      image(title,250,250);
      textAlign(CENTER);
      textSize(75);
      fill(255,200,0);
      text("GAME",250,100);
      text("OVER",250,200);
      text("Highscore: "+highScore,250,300);
      text("Click to Restart!",250,400);
    }
    }
    else{
        image(title,250,250);
        textAlign(CENTER);
        textSize(75);
        fill(255,200,0);
        text("Smokey's",250,100);
        text("Quest",250,200);
        text("Click to Start!",250,400);
    }
 }
  
 function mouseClicked() {
     if(swch == 0 || swch == 2){
         swch = 1;
         image(titleBack,250,250);
    }

 }
