let colorlist = ['gold', 'yellow', 'turquoise', 'red'];
let winnie;
let brushColor = 0;

function preload() {
  winnie = loadImage("./assets/Winnie-the-Pooh.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  image(winnie, 0, 0);
}

function draw() {




  fill('red');
  ellipse(1300, 50, 40, 40); 
  fill('yellow');
  ellipse(1375, 50, 40, 40);
  fill('green');
  ellipse(1450, 50, 40, 40); 
  fill('blue');
  ellipse(1525, 50, 40, 40); 
  fill('black');
  ellipse(1600, 50, 40, 40);
  fill('orange');
  ellipse(1300, 125, 40, 40);
  fill('purple');
  ellipse(1375, 125, 40, 40); 
  fill('turquoise');
  ellipse(1450, 125, 40, 40); 
  fill('pink');
  ellipse(1525, 125, 40, 40);
  fill('grey');
  ellipse(1600, 125, 40, 40); 

  noStroke();
  fill(brushColor);
  ellipse(mouseX + 50, mouseY + 50, 25, 25);
  
  
}

function mouseClicked() {
  brushColor = get(mouseX, mouseY);
}

function keyPressed() {
  if (keyCode == " ") {
    save();
  }
}
