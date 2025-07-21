let centerX = 0;
let centerY = 0;
let bottomY = 0;
let diameter = 0;
let w = 0; // flame width
let h = 0; // flame height
let wVar = 0;
let hVar = 0;
let hue = 0;

let timeStart = 0;
let pressedFlag = false;
let cFlameFlag = false;
let eFlameFlag = false;

function setup() {
  let canvas = createCanvas(400, 500);
  canvas.parent('canvas-container');

  colorMode(HSL, 360, 100, 100, 1); // alpha(transparency)
  centerX = width / 2;
  centerY = height / 2;
  bottomY = height * 0.6;
  imgWhite = loadImage('./images/pages/1230-candleflame/happybirthday-white.png');
  imgBlack = loadImage('./images/pages/1230-candleflame/happybirthday-black.png');
  imgCake = loadImage('./images/pages/1230-candleflame/cake.png');
}

function draw() {
  background(0, 0, 0);

  // happybirthday text
  image(imgWhite, centerX - 77, 20, 154, 70);

  // set noise
  let t = millis() * 0.001;
  let n = noise(t); // 0~1 사이 값
  let m = noise(t+100);
  let l = noise(t+200);

  // set color 27, 55
  hue = map(l, 0, 1, 40, 60);

  // set diameter
  w = map(n, 0, 1, 5, 15);
  h = map(m, 0, 1, 20, 40);
  diameter = h + 80; // diameter of the outer circle

  if (mouseIsPressed) {
    if (!pressedFlag) {
      timeStart = millis();
      pressedFlag = true;
    }

    let d = dist(mouseX, mouseY, centerX, bottomY*0.94);
    if (d <= diameter/2) {
      // width range: 5~15 -> 3~10
      wVar = map(n, 0, 1, 3, 10);
      // height range: 20~40 -> 10~35
      hVar = map(m, 0, 1, 10, 35);
      cFlameFlag = false;
      eFlameFlag = true;
    } else {
      cFlameFlag = true;
      eFlameFlag = false;
    }

    let now = millis();
    let elapsedTime = (now - timeStart) / 1000;

    if (elapsedTime >= 5){
      cFlameFlag = false;
      eFlameFlag = false;

      noLoop();
    }

  } else {
    // reset the time
    timeStart = 0;
    pressedFlag = false;
    cFlameFlag = true;
    eFlameFlag = false;
  }

  if (eFlameFlag && !cFlameFlag) {
    drawEllipse(diameter);
    drawCandle(false);
  } else if (cFlameFlag && !eFlameFlag){
    drawCircle(diameter);
    drawCandle(false);
  } else {
    drawWish();
    drawCandle(true);
  }

}

function drawCircle(diameter) {

  // outer circle
  fill(hue-10, 100, 50, 0.5);
  circle(centerX, bottomY*0.94, diameter);
  noStroke();

  fill(hue-10, 100, 50, 1);
  circle(centerX, bottomY*0.97, diameter - 40);
  noStroke();

  // inner circle
  fill(hue-5, 100, 50, 1);
  circle(centerX, bottomY, diameter - 85);
  noStroke();

  // flame
  fill(hue, 100, 50, 1);
  ellipse(centerX, bottomY, w, h);
  noStroke();
}

function drawEllipse(diameter) {
  // outer circle
  fill(hue-10, 100, 50, 0.5);
  ellipse(centerX, bottomY*0.94, diameter-30, diameter-15);
  noStroke();

  fill(hue-10, 100, 50, 1);
  ellipse(centerX, bottomY*0.99, diameter-70, diameter-55);
  noStroke();

  // inner circle
  fill(hue-5, 100, 50, 1);
  ellipse(centerX, bottomY, diameter - 90, diameter-90);
  noStroke();

  // flame
  fill(hue, 100, 50, 1);
  ellipse(centerX, bottomY, wVar, hVar);
  noStroke();

}

function drawWish() {
  background(72, 10, 87);
  image(imgBlack, centerX - 77, 20, 154, 70);
  image(imgCake, centerX - 127.5, 350, 255, 150);
}

function drawCandle(on) {
  let wickWidth = 3;
  let wickHeight = 10;

  let rectWidth = 15;
  let rectHeight = 80;

  if(on) {
    fill(0, 0, 0);
    rect(centerX - wickWidth/2, bottomY + 10, wickWidth, wickHeight);
    fill(0, 0, 100);
  } else { //off
    // x1 y1 x2 y2
  const myGradient = drawingContext.createLinearGradient(centerX - rectWidth/2, bottomY + 20, centerX - rectWidth/2, bottomY + 20 + rectHeight);

  myGradient.addColorStop(0, `hsl(${hue - 10}, 100%, 80%)`);
  myGradient.addColorStop(0.6, `hsl(${hue - 10}, 100%, 40%)`);
  myGradient.addColorStop(1, `hsl(${hue - 10}, 100%, 0%)`);
  drawingContext.fillStyle = myGradient;
  drawingContext.strokeStyle = 'hsla(0, 0, 0, 0)';
  }

  // x y w h
  rect(centerX - rectWidth/2, bottomY + 20, rectWidth, rectHeight);
}