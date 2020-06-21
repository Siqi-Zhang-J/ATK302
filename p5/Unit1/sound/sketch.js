var song1

function preload(){
  song1=loadSound{'assests/bell.mp3'};
}

function setup(){

  createCanvas(720,200);
  background(255,0,0);
  sonmg1.play();

}

function draw(){

}

function mouseReleased(){

  if (song1.isPlaying()){
song1.pause();
}else{
  song1.play();
}


}


function touchStarted(){
  getAudioContext().resume();
}
