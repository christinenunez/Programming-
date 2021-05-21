// for orange, white, and blue color values
let O, w, b;

function setup() {
  createCanvas(500,500);
  // Pick colors randomly
  r = random(225);
  g = random(225);
  b = random(225);
}

function draw() {
  background(147,255,242);
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(360, 200, 200, 200);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(225);
    g = random(225);
    b = random(225);
  }
}
