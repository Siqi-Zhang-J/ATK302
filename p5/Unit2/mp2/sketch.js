let state = 0;
let i1, i2;
let s1, s2;
let mic;
let vol;
let timer = 0;
let y = 400;

function setup() {
  createCanvas(400, 300);
  rectMode(CENTER);


  i1 = loadImage("assest/2.jpg");
  i2 = loadImage("assest/.jpg");

  // s1 = loadSound("assest/door_bell.mp3") ;
  // s2 = loadSound("assest/rolling_pencil.mp3") ;

  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();

}



function draw() {

  background(100);

  let r1 = map(mouseX, 0, width, 0, height);
  let r2 = height - r1;

  fill(237, 34, 93, r1);
  rect(width / 2 + r1 / 2, height / 2, r1, r1);

  fill(237, 34, 93, r2);
  rect(width / 2 - r2 / 2, height / 2, r2, r2);
  vol = mic.getLevel(); // level is between 0 and 1



  switch (state) {

    case 0:
      image(i1, 0, 0, 400, 300);
      image(i2, 100, 100, 100, 100);
      text("SUMMER!!!", 150, 150);
      break;

    case 1:
      background('white');
      fill('yellow');
      ellipse(56, 46, 55, 55);
      ellipse(56, 56, 55, 55);
      ellipse(56, 66, 55, 55);
ellipse(350, 200, 55, 55);
      ellipse(350, 190, 55, 55);
      ellipse(350, 180, 55, 55);
      ellipse(350, 170, 55, 55);
      fill('black');
      text("Have Fun!! Speak Louder!!", 100, 150);
      text(vol.toFixed(2), 100, 120);

      if (vol > .3) {
        // do something
        state = 2;
      }

      break;

    case 2:
      background('green');
      fill('white');
      square(40, 40, 55, 20);
      square(40, 60, 55, 20);
      square(40, 80, 55, 20);
      square(350,190, 55, 20);
      square(350,210, 55, 20);
      square(350,230, 55, 20);
      text("Do you have fun?", 100, 150);
      y = y - 1;
      if (y < 0) {
        state = 3;
      }
      break;

    case 3:
      background('orange');
      fill('blue')
      rect(40, 40, 55, 55);
      rect(50, 60, 55, 55);
      rect(60, 80, 55, 55);
      rect(70, 100, 55, 55);
      rect(300, 190, 55, 55);
      rect(310, 210, 55, 55);
      rect(320, 230, 55, 55);
      rect(330, 250, 55, 55);

      fill('black')
      text("ENJOY YOUR SUMMER", 100, 150);
      timer = timer + 1
      if (timer > 100) {
        state = 0;
        timer = 0;
      }
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 3) state = 0;

}
