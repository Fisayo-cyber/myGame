// make sprites for the track edges , add them all to a group
var wall1
var wall2
var wall3
var wall4
var wall5
var wall6
var wall7
var wall8
var wall8
var wall9
var wall10
var wallsGroup
var car1, car1Image
var track, trackImage
var speed = 0

function preload() {
  car1Image = loadImage("images/redCar.png")
  trackImage = loadImage("images/Track.jpg")
}

function setup() {
  createCanvas(1200,600);
  wallsGroup = new Group()
  
  track = createSprite(600, 300, 60, 60)
  track.addImage(trackImage)
  
  //outside walls
  wall1 = createSprite(600, 83, 680, 10)
  wall2 = createSprite(600, 527, 680, 10)
  wall3 = createSprite(259, 300, 10, 470)
  wall4 = createSprite(944, 300, 10, 470)

  //thick top and bottom walls
  wall5 = createSprite(600, 187, 480, 40)
  wall6 = createSprite(600, 428, 480, 40)
 
  //center thick wall
  wall7 = createSprite(720, 310, 450, 35)

  //inside walls
  wall8 = createSprite(355, 310, 10, 280)
  
  wallsGroup.add(wall1)
  wallsGroup.add(wall2)
  wallsGroup.add(wall3)
  wallsGroup.add(wall4)
  wallsGroup.add(wall5)
  wallsGroup.add(wall6)
  wallsGroup.add(wall7)
  wallsGroup.add(wall8)

 

  car1 = createSprite(700, 300, 100, 100)
  car1.addImage(car1Image)
  car1.scale = 0.125
  
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

  if (car1.isTouching(wallsGroup)) {
    car1.x = 408
    car1.y = 125
    car1.rotation = 0
  }

  

  
  car1.setSpeedAndDirection(speed, car1.rotation)
  console.log(speed)
  drawSprites();
  text(mouseX + "," + mouseY, mouseX, mouseY)
}