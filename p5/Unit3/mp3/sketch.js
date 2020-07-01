var cars = [];
var picture = []; // an array for the objects
var frogPos ;
let state = -1 ;
let timer = 0 ;
let img1 ;
let img2 ;
let song1, song2, song3;

function preload() {
  song1 = loadSound("assets/1.mp3");
  song2 = loadSound("assets/2.mp3");
  song3 = loadSound("assets/3.mp3");
  song1.loop();
  song1.loop();
  song1.loop();
  song1.pause();
  song2.pause();
  song3.pause();


}

function setup() {

  createCanvas(446, 311) ;;
  img1 = loadImage("assets/2.jpeg") ;
  img2 = loadImage("assets/1.jpg") ;

picture[0] = loadImage("assets/hmbb.png");
picture[1] = loadImage("assets/zyg.png");

  // spawn the objects
  for (let i = 0; i < 10; i++) {
    cars.push(new Car());  // put the objects onto the cars array
  }
  frogPos = createVector(width / 2, height - 120);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);


}



function draw() {

  switch(state) {

    case -1:
    song1.play() ;
    state = 0 ;
    break ;

    case 0:
    background('grey') ;
   image(img2,width/2,height/2,width,height) ;
   fill('black');
    text("welcome to my game!", 150, 200) ;
    break ;

    case 1:  //game state
      game() ;
      timer++ ;
      if (timer > 200) {
        state = 3 ;
        timer = 0 ;
      }
      break ;

    case 2:
    background('pink') ;
    image(img2,width/2,height/2,width,height) ;// put image here
    fill('black') ;
    text("You won!!!", 150, 200) ;
    break ;

    case 3:
      background('blue') ;
      image(img1,width/2,height/2,width,height) ;// put image here
      fill('black') ;
      text("Sorry,you are lost,try again!", 150, 200) ;
      break ;

  }
}

function reset() {
  cars = [] ;
  timer = 0 ;
  // spawn the objects
  for (let i = 0; i < 10; i++) {
    cars.push(new Car());  // put the objects onto the cars array
  }
}

function mouseReleased() {
    switch(state) {
      case 0:
      state = 1 ;
      break ;

      case 2: // win
      reset() ;
      state = 0 ; // go back to welcome
      break ;

      case 3:  // lose
      reset() ;
      state = 0 ; //go back to welcome
      break ;


    }

  }


function game() {
  background('white');
  // image ...

  // iterate through the array, display them, update them
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].update();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1) ; //delate a car
    }
  }

  // check if therenare any cars left
  if (cars.length == 0) {
    state =  2; //go to win state}
  }


  // draw a "frog" here
  fill('green') ;
//  ellipse(frogPos.x, frogPos.y, 70, 70) ;
  image(picture[0], frogPos.x, frogPos.y, 70, 70);

  //    checkForKeys() ;

  frogPos.x = mouseX ;
  frogPos.y = mouseY ;

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

}



// this is the Car class!
class Car {
  constructor() {
    // attributes
    this.pos = createVector(width / 2, height / 2); // where it starts
    this.vel = createVector(random(-3, 3), random(-3, 3)); // direction
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(255);

  }

  // methods

  display() { // this displays the object
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, 30, 30);
    // image(img1, this.pos.x, this.pos.y, 100, 100) ;
  }

  update() { // this moves the object
    this.pos.add(this.vel);  // add the velocity to the position

    // loop the objects around the screen
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}
