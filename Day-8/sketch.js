var bg, bgImage;
var mario, mario_running;
var jump_sound;
var ground;
var brickImage, bricksGroup;

var coinsGroup, coinImage;
var coinScore = 0;

// load all assets in the memory
function preload() {
  bgImage = loadImage("./images/bgnew.jpg");
  mario_running = loadAnimation(
    "./images/mar1.png",
    "./images/mar2.png",
    "./images/mar3.png",
    "./images/mar4.png",
    "./images/mar5.png",
    "./images/mar6.png",
    "./images/mar7.png"
  );
  brickImage = loadImage("./images/brick.png");

  coinImage = loadAnimation(
    "images/con1.png",
    "images/con2.png",
    "images/con3.png",
    "images/con4.png",
    "images/con5.png",
    "images/con6.png"
  );
  coinSound = loadSound("sounds/coinSound.mp3");
  jump_sound= loadSound("sounds/jump.mp3");
}

// Setting up the game objects (Location and Sizes)
function setup() {
  createCanvas(1000, 600);

  bg = createSprite(600, 300);
  bg.addImage(bgImage);
  bg.scale = 0.4;

  mario = createSprite(200, 470, 20, 50);
  mario.addAnimation("running_mario", mario_running);
  mario.scale = 0.2;

  ground = createSprite(200, 530, 400, 10);

  // Bricks
  bricksGroup = new Group();

  coinsGroup = new Group();
}

// It will draw and redraw the Objects
function draw() {
  background("black");

  // Draw the Sprites
  drawSprites();

  // Repeat the Background
  bg.velocityX = -4;
  if (bg.x < 250) bg.x = bg.width / 8;

  // Jump the Mario
  if (keyDown("space")) {
    mario.velocityY = -10;
    jump_sound.play();
  }

  // Adding Gravity
  mario.velocityY = mario.velocityY + 0.5;

  // Mario should stay on ground
  mario.collide(ground);
  ground.visible = false;

  generateBricks();
  for (let i = 0; i < bricksGroup.length; i++) {
    var temp = bricksGroup.get(i);

    if (temp.isTouching(mario)) {
      mario.collide(temp);
    }
  }

  // Issue with the mario
  if (mario.x < 200) {
    mario.x = 200;
  }

  if (mario.y < 50) {
    mario.y = 50;
  }

  generateCoins();

  for (var i = 0; i < coinsGroup.length; i++) {
    var temp = coinsGroup.get(i);

    if (temp.isTouching(mario)) {
      coinSound.play();
      coinScore++;
      temp.destroy();
      temp = null;
    }
  }

  textSize(20);
  fill("brown");
  text("Coins Collected: " + coinScore, 400, 50);
}

function generateBricks() {
  if (frameCount % 70 == 0) {
    // console.log(frameCount);

    brick = createSprite(1200, 120, 40, 10);
    brick.addImage(brickImage);
    brick.y = random(50, 350);
    brick.scale = 0.5;
    brick.velocityX = -5;

    brick.lifetime = 1200

    bricksGroup.add(brick);
  }
}

function generateCoins() {
  if (frameCount % 80 === 0) {
    var coin = createSprite(1200, 120, 40, 10);
    coin.y = Math.round(random(80, 350));
    coin.addAnimation("coin", coinImage);
    coin.scale = 0.1;
    coin.velocityX = -3;

    coin.lifetime = 1200;

    coinsGroup.add(coin);
  }
}

function generateObs() {
  if (frameCount % 100 === 0) {
    var obs = createSprite(1200, 555, 10, 40);
    obs.scale = 0.1;
    obs.velocityX = -4;
    rand = Math.round(random(1, 2));
    switch (rand) {
      case 1:
        obs.addAnimation("mush", mushObsImg);
        break;
      case 2:
        obs.addAnimation("tur", turObsImg);
        break;
      default:
        break;
    }
    obs.lifetime = 300;
    obsGroup.add(obs);
  }
}
