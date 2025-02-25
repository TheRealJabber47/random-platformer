let player;
let platforms = [];
let screen = "menu"
function setup() {
  createCanvas(1200, 800);
  player = new Player(50, 300);
}

function draw() {
  background(220)
  player.update();
  player.show();
  
  for (let platform of platforms) {
    platform.show();
  }
  if(screen = "menu"){
    textSize(200)
    textAlign(CENTER)
    text("Help", width/2, height/2)

    platforms.push(new Platform(100, 350, 150, 20));
    platforms.push(new Platform(900, 350, 150, 20));

    platforms.push(new Platform(500, 150, 200, 20));
    platforms.push(new Platform(500, 550, 200, 20));

    platforms.push(new Platform(300, 650, 200, 20));
    platforms.push(new Platform(700, 650, 200, 20));


  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    player.jump();
  }
}
