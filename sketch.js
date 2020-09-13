var bullet, wall, speed, weight, deformation, thickness
function setup() {
  createCanvas(1600,400)
  speed = random(55, 90)
  weight = random(400, 1500)
  bullet = createSprite(50, 200, 50, 20)
  wall = createSprite(1200, 200, 60, windowHeight/2)
  bullet.shapeColor = 'white'
  thickness = random(22, 83)
  bullet.velocityX = speed
  wall.depth = 0
  bullet.depth = 8

}

function draw() {
  background(0,0,0)  
  drawSprites()
  console.log(deformation)
  if (wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0
    deformation = (0.5 * weight * speed * speed)/(thickness*thickness*thickness)
    if (deformation > 10){
      bullet.shapeColor = color(255, 0, 0)
    }
    else{
      bullet.shapeColor = color(0, 255, 0)
    }


  }
}
