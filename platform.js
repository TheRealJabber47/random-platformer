class Platform {
    constructor(x, y, w, h) {
      this.pos = createVector(x,y)
      this.size = createVector(w,h)
    }
  
    show() {
      fill(0);
      rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
  }
  