function setup() {
  createCanvas(400, 400);
  background('black');
}

function draw() {
  // Call the variableEllipse() method and send it the
  // parameters for the current mouse position
  // and the previous mouse position
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}

// The simple method variableEllipse() was created specifically
// for this program. It calculates the speed of the mouse
// and draws a small ellipse if the mouse is moving slowly
// and draws a large ellipse if the mouse is moving quickly

function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  noStroke(speed);
  rect(x, y, speed, speed);
fill('250')
 ellipse(200,250,200,200)
ellipse(140,140,80,200)
ellipse(245,140,80,200)
fill('pink')
ellipse(140,130,40,100)
ellipse(245,130,40,100)
  fill('grey')
 rect(260, 300, 100, 5)
 rect(260, 250, 100, 5)
 rect(260, 275, 100, 5)
 rect(40, 250, 100, 5)
rect(40, 300, 100, 5)
rect(40, 275, 100, 5)
fill('black')
 ellipse(200,280,20,20)
  fill('brown')
 ellipse(230,240,12,12)
 ellipse(170,240,12,12)
  fill('orange')
 triangle(55, 180, 80, 80, 25, 80)
  fill('green')
triangle(40, 100, 68, 70, 100, 60)
triangle(40, 100, 38, 60, 50, 60)
triangle(40,40, 58, 60, 60, 100)
if (mouseIsPressed) {

    // stuff that shows when the mouse is pressed
fill('orange')
 triangle(55, 180, 80, 80, 25, 80)
  fill('green')
triangle(40, 100, 68, 70, 100, 60)
triangle(40, 100, 38, 60, 50, 60)
triangle(40,40, 58, 60, 60, 100);
fill('orange')
    text("CARROT", 260, 350);


  } else {

    // when the mouse isn't pressed!

  fill('green')
 triangle(55, 180, 80, 80, 25, 80)
  fill('orange')
triangle(40, 100, 68, 70, 100, 60)
triangle(40, 100, 38, 60, 50, 60)
triangle(40,40, 58, 60, 60, 100) ;
fill('white')
    textSize(30);

    text("RABBIT", 260, 350);
}}
