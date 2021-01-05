let inconsolata;
let cnt = 0;
let r = 0;
let g = 0;
let b = 0;
let rC = 0;
let gC = 0;
let bC = 0;

function preload() {
  inconsolata = loadFont('assets/inconsolata.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // createCanvas(500, 500, WEBGL);
  textFont(inconsolata);
  frameRate(30);
  textSize(width / 3);
  textAlign(CENTER, CENTER);
}

function draw() {
  fill(rC, gC, bC);
  background(r, g, b);
  let time = millis();
  rotateX(time / 1500);
  rotateZ(time / 1034);
  text(frameCount, 0, 0);
  isPrime(frameCount);

}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  r = random(255)
  g = random(255)
  b = random(255)
  rC = random(255)
  gC = random(255)
  bC = random(255)
  return num > 1;
}