let myImages = ['Winnie-the-Pooh.png', 'tinker-bell.png', 'simba.png', 'dumbo.png', 'Max-and-Ruby.png', 'disney-princesses.png']
let brushSize = 0;
let brushColor = 0;
let slider;
let imageUse;

function preload() {
  slider = createSlider(5, 100, 20, 1);
  slider.position(975, 130);
  slider.style('width', '250px');

  imageUse = loadImage("./assets/" + random(myImages));
  playButton = loadImage("assets/play-button.png")
  song = loadSound("./assets/Le-Festin-Camille");
  

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(32);
 
  textSize(24);
  fill('red');
  text('Hit Space in your key board to save image.', 825, 1000);

  textSize(20);
  fill(0);
  text('Brush Size: ', 850, 137);

  imageUse.resize(800, 1050);
  image(imageUse, 0, 0);
  
}

function draw() {
  
  fill('red');
  ellipse(1300, 50, 40); 
  fill('yellow');
  ellipse(1375, 50, 40);
  fill('green');
  ellipse(1450, 50, 40); 
  fill('blue');
  ellipse(1525, 50, 40); 
  fill('black');
  ellipse(1600, 50, 40);
  fill('orange');
  ellipse(1300, 125, 40);
  fill('purple');
  ellipse(1375, 125, 40); 
  fill('turquoise');
  ellipse(1450, 125, 40); 
  fill('pink');
  ellipse(1525, 125, 40);
  fill('grey');
  ellipse(1600, 125, 40); 

  noStroke();
  fill(brushColor);
  if (mouseIsPressed) {
    if (mouseX > 0 && mouseX < imageUse.width && mouseY > 0 && mouseY < imageUse.height) {
      brushSize = slider.value();
    }
  } else {
    brushSize = 0;
  }

  
  ellipse(mouseX, mouseY, brushSize);
  
}

function mousePressed() {
  
}

function mouseClicked() {
  if (mouseX > 1260 && mouseX < 1640 && mouseY > 10 && mouseY < 165) {
    brushColor = get(mouseX, mouseY);
  }
    
}

function keyPressed() {
  if (key == " ") {
    save(imageUse, "myImage.png");
  }
}
