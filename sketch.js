//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dog12

function preload()
{
  //load images here
   dog= loadImage("images/dogImg.png")
   happyDog= loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  dog12=createSprite(200,200,20,20)
 // dog12.addImage(dog)

  
}


function draw() {  
background(46,139,87)
database =firebase.database()
foodStockref=database.ref('Food');
foodStock.on ("Value", readStock);
  drawSprites();
  //add styles here
  if(keyWentDown(UP_AROW)){
    writeStock(foodS);
   // dog12.addImage(happyDog)
  }
  

}



