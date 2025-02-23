let player;
let platforms = [];

function setup() {
  createCanvas(600, 400);
  
  // Create the player
  player = new Player(50, 300);
  
  // Create platforms
  platforms.push(new Platform(100, 350, 150, 20));
  platforms.push(new Platform(300, 250, 200, 20));
  platforms.push(new Platform(500, 150, 150, 20));
}

function draw() {
  background(135, 206, 235); // Sky blue
  
  player.update();
  player.show();
  
  for (let platform of platforms) {
    platform.show();
  }
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 40;
    this.xSpeed = 3;
    this.ySpeed = 0;
    this.gravity = 0.5;
    this.jumpStrength = -10;
    this.onGround = false;
  }

  update() {
    // Apply gravity
    this.ySpeed += this.gravity;
    this.y += this.ySpeed;
    
    // Move left and right
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.xSpeed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.xSpeed;
    }
    
    // Collision detection with platforms
    this.onGround = false;
    for (let platform of platforms) {
      if (collideRectRect(this.x, this.y, this.w, this.h, platform.x, platform.y, platform.w, platform.h)) {
        if (this.ySpeed > 0) { // Falling onto a platform
          this.y = platform.y - this.h;
          this.ySpeed = 0;
          this.onGround = true;
        }
      }
    }
    
    // Prevent falling below the screen
    if (this.y > height - this.h) {
      this.y = height - this.h;
      this.ySpeed = 0;
      this.onGround = true;
    }
  }

  jump() {
    if (this.onGround) {
      this.ySpeed = this.jumpStrength;
    }
  }

  show() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.w, this.h);
  }
}

class Platform {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  show() {
    fill(100, 50, 0);
    rect(this.x, this.y, this.w, this.h);
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    player.jump();
  }
}
