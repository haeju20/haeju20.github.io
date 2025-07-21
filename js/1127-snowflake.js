let snowflakes = [];

let containerWidth = 800;
let containerHeight = 600;

function preload() {
  snow_pixel = loadImage("./images/pages/1127-snowflakes/pixel.png");

}

function setup() {
  // 캔버스 생성 - 배경 이미지와 같은 크기
  let canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent('canvas-container');

  clear();
}


function draw() {
  clear();

// A99D91, (164, 156, 149)
  // background(42, 46, 75);
  // let c1 = color(40, 41, 50);
  // let c2 = color(56, 65, 133);
  // let c1 = color(42, 37, 33);
  // let c2 = color(164, 156, 149);
  // setGradient('y', c1, c2);

  // image(buil, 0, 100);
  // image(buil_illust, 200, 130);
  // image(snow_pixel, 200, 200, 30, 30);

  // 랜덤 값을 속성으로 갖는 눈송이들을 배열에 삽입
  if (snowflakes.length < 50) {
      snowflakes.push({
        x: random(width),
        y: random(-10, -30),
        speed: random(0.5, 2),
        drift: random(-1, 1),
        size: random(10,30)
      });
  }

  for (let i = snowflakes.length - 1; i >= 0; i--){
    let sf = snowflakes[i];

    sf.y += sf.speed;
    sf.x += sf.drift;

//    fill(255);
//    textSize(sf.size);
//    if (i%2 == 0) {
//      text(' _', sf.x, sf.y);
//      text('(_)', sf.x, sf.y + sf.size);
//    } else {
//      text(' .-.', sf.x, sf.y);
//      text('(   )', sf.x, sf.y + sf.size);
//      text(" ._.", sf.x, sf.y + sf.size*1.5);
//    }

    // textSize(sf.size);
    // text('*', sf.x, sf.y);
    image(snow_pixel, sf.x, sf.y, sf.size+20, sf.size+20);
    // image(snow_pixel, sf.x, sf.y, sf.size, sf.size)
  }
}

function keyPressed() {
  // when space bar is pressed, pause
  if (key === '') {
  }
}

// 배경색에 그라디언트 적용하기
function setGradient(axis, c1, c2) {
  if (axis == 'x') {
    for (let i = 0; i < width; i++){
      let n = map(i, 0, width, 0, 1);
      let c3 = lerpColor(c1, c2, n);
      stroke(c3);
      line(i, 0, i, height);
    }
  } else if (axis == 'y'){
    for (let j = 0; j < height; j++){
      let m = map(j, 0, height, 0, 1);
      let c3 = lerpColor(c1, c2, m);
      stroke(c3);
      line(0, j, width, j);
    }
  }
}
