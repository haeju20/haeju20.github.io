let snowflakes = [];
let snowHeight = [];
let selectedSnowType = 0;
let windDirection = 0;

let canvasContainer = document.querySelector(".canvas-container");
let containerWidth = canvasContainer.offsetWidth;
let containerHeight = canvasContainer.offsetHeight;

const snowType = ['text', 'ascii', 'figure', 'pixel', 'image'];

const snowTypeAscii = [
  [' _', '(_)'],
  [' .-.', '(   )', ' ._.']
];

function preload() {
  snow_pixel = loadImage("./images/pages/1127-snowflakes/pixel_36.png");
  snow_ellipse = loadImage("./images/pages/1127-snowflakes/ellipse.png");
  snow_image = loadImage("./images/pages/1127-snowflakes/picture.png");
}

function setup() {
  pixelDensity(1);

  // 캔버스 생성 - 배경 이미지와 같은 크기
  let canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent('canvas-container');

  const radioButton = document.querySelectorAll('input[name="rdo-level"]');
  radioButton.forEach(button => {
     button.addEventListener('change', function() {
         selectedSnowType = parseInt(this.value);
     });
  });

  // 쌓인 눈 초기화
  snowHeight = new Array(containerWidth).fill(0);
}

function draw() {
  // 매 프레임 화면 초기화
  clear();

  if (random() < 0.1) {
    createSnowflake();
  }

  for (let i = snowflakes.length - 1; i >= 0; i--){
    let snowflake = snowflakes[i];
    fallSnowflake(snowflake);
    drawSnowflake(snowflake);
  }

}

function createSnowflake() {
  let snowflake = {
    x: random(containerWidth),
    y: random(-50, -10),
    type: selectedSnowType,
    size: random(40, 50),
    speed: random(0.5, 1.5)
  }

  snowflakes.push(snowflake);
}

function fallSnowflake(snowflake) {
  snowflake.y += snowflake.speed;
  snowflake.x += windDirection * snowflake.speed * 0.3; // 바람 효과
}

function drawSnowflake(snowflake) {
  push();

  switch(snowflake.type) {
    case 0: //text
      fill(255);
      textSize(snowflake.size);
      text('*', snowflake.x, snowflake.y);
      break;
    case 1: //ascii
      break;
    case 2: //figure
      imageMode(CENTER);
      image(snow_ellipse, snowflake.x, snowflake.y, snowflake.size, snowflake.size);
      break;
    case 3: //pixel
      imageMode(CENTER);
      image(snow_pixel, snowflake.x, snowflake.y, snowflake.size * 0.6, snowflake.size * 0.6)
      break;
    case 4: //image
      imageMode(CENTER);
      image(snow_image, snowflake.x, snowflake.y, snowflake.size * 0.6, snowflake.size * 0.6)
      break;
  }
  pop();
}