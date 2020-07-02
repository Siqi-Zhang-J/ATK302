/* For mobile phones - accesses accelerometer.
Make sure you turn on orientation lock on your iPhone or Android device. */

// variables for gyroscope and accelerometer data
var alpha, beta, gamma; // orientation data
var xPosition = 0;
var yPosition = 0;
var x = 0; // acceleration data
var y = 0;
var z = 0;
let img1 ;
let img2 ;
let cars = [] ;

// other variables
var bunnyImage;

function setup() {

  createCanvas(windowWidth, windowHeight);
  img1 = loadImage("assets/1.jpg") ;
  img2 = loadImage("assets/2.png") ;

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;

for (var l = 0;l < 30;l++){
  cars.push(new Car());
}

frogPos = createVector(width / 2,height -80);


// initialize other variables
  bunnyImage = loadImage("assets/1ZY.jpg");
  imageMode(CENTER);
  rectMode(CENTER);

}

function draw() {

  background('#c6f5fe'); // light blue
  image(img1,width/2,height/2,width,height) ;

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  // xPosition = map(gamma, -60, 60, 0, width);
  // yPosition = map(beta, 60, 20, 0, height) ;
  xPosition = map(gamma, -18, 18, 0, width);
  yPosition = map(beta, 25, 45, 0, height);

  push(); // before you use translate, rotate, or scale commands, push and then pop after
  translate(xPosition, yPosition); // move everything over by x, y
  // rotate(radians(alpha)); // using alpha in here so it doesn't feel bad
  //  	rect(0, 0, 100, 100) ;


  // Here is where you can design this program!
  image(img2,width/2,height/2,width,height) ;
  pop();


  frogPos.x = xPosition;
  frogPos.y = yPosition;

  for (var i = 0; i < cars.length; i++) {
   cars[i].display();
   cars[i].drive();
   if (cars[i].pos.dist(frogPos)<50){
     cars.splice(i,1);
   }
  }

  fill('white');
  textSize(80);
  textAlign(CENTER);
  text("Squidward",width/2,600,windowWidth - 200,windowHeight - 200);
  // DECORATIONS
  // Just a bunch of text commands to display data coming in from addEventListeners
  textAlign(LEFT);
  textSize(20);
  fill('black');
  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha, 25, 50);
  text("beta: " + beta, 25, 70);
  text("gamma: " + gamma, 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);
  text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
  text("y = " + y.toFixed(2), 25, 170);
  text("z = " + z.toFixed(4), 25, 190);



}

function deviceShaken(){
  cars = [];
  for (var i = 0;i < 40;i++){
    cars.push(new Car())
  }
}

// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});






function Car(){
  this.pos = createVector(100,100);
  this.vel = createVector(random(-5,5),random(-5,5));
  this.r = random(255);
    this.g = random(255);
      this.b = random(255);
        this.a = random(255);


        this.display = function(){
          fill(this.r,this.g,this.a);
        //  ellipse(this.pos.x,this.pos.y,50,50);
        image(img2,this.pos.x, this.pos.y, 50, 50) ;
        //  ellipse(this.pos.x + 35,this.pos.y,50,50);
        //  rect(this.pos.x + 20,this.pos.y - 30,80,60);

        }

        this.drive = function(){
          this.pos.add(this.vel);

          if (this.pos.x > width) this.pos.x = 0;
          if (this.pos.x < 0) this.pos.x = width;
          if (this.pos.y > height) this.pos.y = 0;
          if (this.pos.y < 0) this.pos.y = height;


        }
}
