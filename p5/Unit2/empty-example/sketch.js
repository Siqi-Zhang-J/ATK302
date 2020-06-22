let state = 0

function setup() {
  createCanvas(300,300);
}

function draw() {

  switch(state){
    case 0:
     background('yellow');
      fill('orange')
      ellipse(56, 50, 55, 55);
           ellipse(75, 50, 50, 50);
           ellipse(90, 50, 45, 45);
      ellipse(105, 50, 40, 40);
            ellipse(160, 250, 55, 55);
           ellipse(170, 250, 50, 50);
           ellipse(185, 250, 45, 45);
      ellipse(200, 250, 40, 40);

      fill('black')
     text('Enjoy the summer!!!', 100, 150);
      fill('white')
      triangle(30, 175, 58, 135, 86, 175);
      square(220, 120, 55);
     break;

    case 1:
     background('orange');
     text('But summer is so hot', 90, 150);
     break;

    case 2:
     background('red');
     text('And there will be a lot of rain', 75, 150);
     break;
  }

}

function mouseReleased(){
  state = state +1;
  if(state > 2){
    state = 0;
  }
}
