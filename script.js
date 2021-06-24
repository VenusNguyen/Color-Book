let winnie;
let brushSize = 0;
let brushColor = 0;
let playButton;
let song;
let slider;

function preload() {
  slider = createSlider(5, 100, 20, 1);
  slider.position(975, 130);
  slider.style('width', '250px');

  winnie = loadImage("./assets/Winnie-the-Pooh.png");
  playButton = loadImage("assets/play-button.png")
  song = loadSound("./assets/Le-Festin-Camille");
  

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(32);
 

  textSize(24);
  text()

  textSize(20);
  text('Brush Size: ', 850, 137);

  image(winnie, 0, 0);
  playButton.resize(50, 50);
  image(playButton, 1300, 800);
  
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
    if (mouseX > 0 && mouseX < winnie.width && mouseY > 0 && mouseY < winnie.height) {
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
    song.play();
    song.setVolume(10);
  }

  // if (mouseX > playButton.x && mouseY < playButton.x + playButton.width && mouseY > playButton.y && mouseY < playButton.y + playButton.height) {
  //   console.log('Here');
    
  // }
    
}

function keyPressed() {
  if (key == " ") {
    save(winnie, "myImage.png");
  }
}
