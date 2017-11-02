var randomVert = [];
var randomHorz = [];
var dataDiag   = [];

var randomNum = function() {

  randomVert.length = 0;
  randomHorz.length = 0;
  dataDiag.length   = 0;

  for (i = 0; i < 10; i++) {
    var randomX = Math.floor(Math.random() * 500) + 1;
    randomVert.push(randomX);
  }
  for (i = 0; i < 10; i++) {
    var randomY = Math.floor(Math.random() * 700) + 1;
    randomHorz.push(randomY);
  }
  for (i = 0; i < 3; i++) {
    var randomZ = Math.floor(Math.random() * 10) + 1;
    dataDiag.push(randomZ);
  }
  randomVert.sort(function(a, b) {return a - b});
  randomHorz.sort(function(a, b) {return a - b});
  // console.log(randomVert);
  // console.log(randomHorz);
}
randomNum();

function setup() {
  createCanvas(500, 700);
  stroke(0);
  background(255);
  noLoop();
}

function draw() {
  for ( i = 0; i < randomHorz.length; i++) {
    line(width, randomHorz[i], 0, randomHorz[i]);
  }
  for ( i = 0; i < randomVert.length; i++) {
    line(randomVert[i], 0, randomVert[i], height);
  }
  for ( i = 0; i < dataDiag.length; i++) {
    line(randomVert[1 + dataDiag[i]], 0, randomVert[2 + dataDiag[i]], randomHorz[3]);
  }
}

function mousePressed() {
  // console.log("redraw() works!");
  saveCanvas(["composition"], ["png"]);
  randomNum();
  setup();
  redraw();
}