let cars = []; // an array for the objects
let frogPos ;
let state = 0 ;
let timer = 0 ;

function setup() {
  createCanvas(windowWidth, windowHeight);

  frogPos = createVector(width/2, height-120) ;

  // spawn the objects
  for (let i = 0; i < 10; i++) {
    cars.push(new Car());  // put the objects onto the cars array
  }
}


function draw() {

  switch(state) {

    case 0:
    background('grey') ; // put image here
    // image()...
    text("welcome to my game!", 200, 200) ;
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
    background('green') ; // put image here
    fill('black') ;
    text("You won!!!", 200, 200) ;
    break ;

    case 3:
      background('blue') ; // put image here
      fill('black') ;
      text("Sorry,you are lost,try again!", 200, 200) ;
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
  ellipse(frogPos.x, frogPos.y, 70, 70) ;
  // image...

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
