// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    HSB, background, collideCircleCircle, color, colorMode, createCanvas, ellipse, height,
 *    mouseX, mouseY, random, rect, stroke, strokeWeight, text, width, textSize, fill
 */

let brushHue, backgroundColor, coinX, coinY, coin1, coin2, coin3, coin4, coinD2, coinD3, score, time, gameIsOver, hit, coinD, out, out1, out2;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  backgroundColor = 95;
  
  //Diameter
  coinD = 20;  //coin1
  coinD2 = 30; //coin2
  coinD3 = 35; //coin3
  
  
  // Get random coordinates for the starting position of the coin (coinX, coinY)
  
  //coin1
  coinX = random(coinD/2, width - coinD/2); 
  coinY = random(coinD/2, height - coinD/2);
  //coin2
  coin1 = random(coinD/2, width - coinD/2);
  coin2 = random(coinD/2, height - coinD/2);
  //coin3
  coin3 = random(coinD/2, width - coinD/2);
  coin4 = random(coinD/2, height - coinD/2);
  
  // Initialize time to 1000, and gameIsOver to false
  time = 1000;
  gameIsOver = false;
  
  score = 0
}

function draw() {
  background(backgroundColor);
  
  // Draw the coin
  fill('red')
  ellipse(coinX, coinY, coinD); // coin1
  fill('blue')
  ellipse(coin1, coin2, coinD2); // coin2
  fill('purple')
  ellipse(coin3, coin4, coinD3); // coin3
  // Draw the cursor at the mouse position
  fill('pink')
  ellipse(mouseX, mouseY, coinD); //mouse
  
  
  
  
  
  // Add text with the time remaining: 
  textSize(12);
  fill('black')
  text(`Score: ${score}`, 20, 20);
  text(`Time remaining: ${time}`, 20, 40);
  
  out = collideCircleCircle(coinX, coinY, coinD, mouseX, mouseY, coinD) // coin1
  out1 = collideCircleCircle(coin1, coin2, coinD, mouseX, mouseY, coinD) // coin2
  out2 = collideCircleCircle(coin3, coin4, coinD, mouseX, mouseY, coinD) //coin3
  
  if (out) {
    handleCollision() //coin1
  }
  
  if (out1) {
    
    handleCollision2() //coin2
    
  }
    
   if (out2) {
     handleCollision3() //coin3
     
   }
    
    
  handleTime()  
}

function handleCollision() {
  // We'll write code for what happens if your character hits a coin.
  if (gameIsOver === false) {   // if (!gameIsOver)
    coinX = random(coinD/2, width - coinD/2);
    coinY = random(coinD/2, height - coinD/2);
    score += 1 //score increases by 1
  }
}


function handleCollision2(){
  if (gameIsOver === false){
    coin1 = random(coinD/4, width - coinD/2);
    coin2 = random(coinD/6, height - coinD/2);
    score += 5
  }
}


function handleCollision3(){
  if (gameIsOver === false){
    coin3 = random(coinD/5, width - coinD/2);
    coin4 = random(coinD/7, height - coinD/2);
    score += 10
  }
  
  
}




function handleTime() {
  // We'll write code to handle the time.
  if (time > 0)
    time -= 1
  else {
    gameIsOver = true
  }
  
  if (gameIsOver) {  // if (gameIsOver == true)
    // fill("red")
    fill('black')
    textSize(20);
    text('Game Over!', width/2 - 40, height/2)
  }
}
