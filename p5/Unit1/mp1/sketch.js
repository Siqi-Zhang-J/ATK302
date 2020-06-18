function setup() { 



  createCanvas(1000, 800);

  rectMode(CENTER);

  ellipseMode(CENTER);





}





function draw() {



  background(100);



  // stuff that we always want to show in back







  if (mouseIsPressed) {

    // stuff that shows when the mouse is pressed

    ellipse(100, 100, 100, 100);

    text("PRESSED MOUSE!!!", 200, 300);



  } else {

    // when the mouse isn't pressed!

    rect(100, 100, 100, 100);

    textSize(40);

    text("The mouse isn't pressed.", 200, 300);

  }







  // stuff that will always show in front





  // this shows mouse location - comment it out when you're done!

  fill(0);

  text(mouseX + ", " + mouseY, 40, 40);



}







function mouseReleased() {

  print(mouseX + ", " + mouseY);

}
