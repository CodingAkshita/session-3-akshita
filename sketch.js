var waitImg,bgimg,popimg
var playbutton,homebutton,aboutbutton;
var beetroot, brinjal, burger, carrot, corn, forest, fries, ham, icecream, cream1, scoop, pumpkin, redfruit
var stickice, veggieburg, dizzy, jump, bottle, leaf  
var gameState = "wait"
var food

function preload(){
waitImg= loadImage("nine.png")
bgimg= loadImage("background.png")
popimg= loadImage("popup.png")
beetrootimg = loadImage("beetRoot.png") 
brinjalimg = loadImage("Brinjal.png")
burgerimg = loadImage("Burger.png")
carrotimg = loadImage("Carrot.png")
cornimg = loadImage("Corn.png")
forestimg = loadImage("Forest.jpg")
friesimg = loadImage("frenchFries.png")
hamimg = loadImage("hamBurger.png")
icecreamimg = loadImage("iceCream.png")
cream1img = loadImage("icecream1.png")
scoopimg = loadImage("icecreamScoop.png")
pumpkinimg = loadImage("Pumpkin.png") 
redfruitimg = loadImage("redFruit.png")
stickiceimg = loadImage("stickIce.png")
veggieburgimg = loadImage("veggieBurger.png")
die = loadAnimation("die1.png", "die2.png", "die3.png", "die4.png", "die5.png", "die6.png");
run = loadAnimation("run1.png", "run2.png", "run3.png", "run4.png", "run5.png", "run6.png", "run7.png") 
walk = loadAnimation("walk1.png", "walk2.png", "walk3.png", "walk4.png", "walk5.png", "walk6.png", "walk7.png")
dizzyimg = loadImage("dizzy1.png")
attack = loadAnimation("attack1.png", "attack2.png", "attack3.png", "attack4.png", "attack5.png")
jumpimg = loadImage("jump1.png")
bottleimg = loadImage("bottle.png")
leafimg = loadImage("leaf.png")

font = loadFont("/fonts/Corinthia-Bold.ttf")
}

function setup(){
createCanvas(windowWidth,windowHeight)
textFont(font)


/*logo = createSprite(windowWidth/2,windowHeight/2)
logo.addImage(logoimg)
logo.scale = 1.2*/


//used dom library to create image buttons   p5.dom.min.js
about=createImg("aboutButton.png");
about.position(100,100)
about.size(100,100)

play=createImg("playButton.png");
play.position(100,200);
play.size(100,100)

home=createImg("homeButton.png")
home.position(100,300)
home.size(100,100)

popbox=createSprite(windowWidth/2,windowHeight/2)
popbox.addImage(popimg)
popbox.visible = false
popbox.scale = 1.25

player = createSprite(100,windowHeight-100)
player.addAnimation("walking",walk)
player.addAnimation("die",die)
player.visible = false
player.scale=1.5
}


function draw(){

if(home.mousePressed(()=>{
    gameState="wait"
  }))

if(gameState==="wait") {
    background(bgimg)
    popbox.visible=false
    player.visible = false
}

if(about.mousePressed(()=>{
gameState="about" 
}))

if (gameState === "about") {
    popbox.visible = true
    player.visible = false
}

if(play.mousePressed(()=>{
    gameState="play" 
}))

if (gameState === "play"){
    popbox.visible = false
    background("yellow")
    player.visible = true
    spawnhealthyfood()
    spawnjunkfood()

    
}

drawSprites()



if (gameState==="about"){
textSize(40)
stroke("green")
strokeWeight(2)
fill("red")
text("This is Akshita's Game.", (windowWidth/2-(popbox.x/5)),120)

}
}

function spawnhealthyfood(){

if(frameCount % 80 ===0){

food = createSprite(windowWidth,windowHeight-250)
food.y = Math.round(random(windowHeight-100,100))
food.velocityX=-3

var rand = random(1,7)

switch(rand){

case 1: food.addImage(beetrootimg);
break;
case 2: food.addImage(brinjalimg);
break;
case 3: food.addImage(carrotimg);
break;
case 4: food.addImage(cornimg);
break;
case 5: food.addImage(pumpkinimg);
break;
case 6: food.addImage(redfruitimg);
break;
case 7: food.addImage(leafimg);
break;

default:break;
}
}
}

function spawnjunkfood(){

    if(frameCount % 70 === 0){
    
    junk = createSprite(windowWidth,windowHeight-250)
    junk.y = Math.round(random(windowHeight-100,100))
    junk.velocityX = -3
    
    var rand = random(1,9)
    
    switch(rand){
    
    case 1: junk.addImage(burgerimg);
    break;
    case 2: junk.addImage(friesimg);
    break;
    case 3: junk.addImage(hamimg);
    break;
    case 4: junk.addImage(icecreamimg);
    break;
    case 5: junk.addImage(cream1img);
    break;
    case 6: junk.addImage(scoopimg);
    break;
    case 7: junk.addImage(stickiceimg);
    break;
    case 8: junk.addImage(veggieburgimg);
    break;
    case 9: junk.addImage(bottleimg);
    break;
  
    default:break;
    }
    }
    }