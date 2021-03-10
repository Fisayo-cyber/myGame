var car1, car1Image
var track, trackImage
var speed = 0
function preload() {
  car1Image = loadImage("images/redCar.png")
  trackImage = loadImage("images/Track.jpg")
}

function setup() {
  createCanvas(1200,600);
  
  track = createSprite(600, 300, 60, 60)
  track.addImage(trackImage)
  

  car1 = createSprite(700, 300, 100, 100)
  car1.addImage(car1Image)
  car1.scale = 0.25

  
}

function draw() {
  background(255, 255, 255);
  if (keyDown("LEFT_ARROW")) {
    car1.rotation += -1
  }
  if (keyDown("RIGHT_ARROW")) {
    car1.rotation += 1
  }
  if (keyDown("UP_ARROW") && speed <= 2.5) {
    speed += 0.1
  }

  else {
    if (speed > 0) {
      speed -= 1
    }
    
      else {
      speed = 0
    }
  }

  
  car1.setSpeedAndDirection(speed, car1.rotation)
  console.log(speed)
  drawSprites();
}