class Player {
    constructor(x, y) {
      this.pos = createVector(x,y)
      this.speed = createVector(3,0)
      this.size = createVector(40,40)
      this.gravity = 0.5;
      this.jumpStrength = -10;
      this.onGround = false;
    }
  
    update() {
      // Apply gravity
      this.speed.y += this.gravity;
      this.pos.y += this.speed.y;
      
      // Move left and right
      if (keyIsDown(LEFT_ARROW)) {
        this.pos.x -= this.speed.x;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.pos.x += this.speed.x;
      }
      
      // Collision detection with platforms
      this.onGround = false;
      for (let platform of platforms) {
        if (collideRectRect(this.pos.x, this.pos.y, this.size.x, this.size.y, platform.pos.x, platform.pos.y, platform.size.x, platform.size.y)) {
          if (this.speed.y > 0) { // Falling onto a platform
            this.pos.y = platform.pos.y - this.size.y;
            this.speed.y = 0;
            this.onGround = true;
          }
        }
      }
      
      // Prevent falling below the screen
      if (this.pos.y > height - this.size.y) {
        this.pos.y = height - this.size.y;
        this.speed.y = 0;
        this.onGround = true;
      }
    }
  
    jump() {
      if (this.onGround) {
        this.speed.y = this.jumpStrength;
      }
    }
  
    show() {
      fill(255, 0, 0);
      rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
  }
  