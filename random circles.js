let circles = [];

function setup() {
  createCanvas(600, 400);
  // Call createCircle function every 1000 milliseconds (1 second)
  setInterval(createCircle, 1000);
}

function draw() {
  background(220);
  // Move and display existing circles
  circles.forEach(circle => {
    fill(circle.color);
    circle.x += circle.speed;
    if (circle.x > width) circle.x = 0;
    ellipse(circle.x, circle.y, 50, 50);
  });
}

function createCircle() {
  // Create a new circle with random properties
  let circle = {
    x: random(width),
    y: random(height),
    speed: random(1, 3),
    color: color(random(255), random(255), random(255))
  };
  // Add the new circle to the circles array
  circles.push(circle);
}