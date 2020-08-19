function setup() {
  createCanvas(1000, 1300);
  background(255);
  frameRate(25);
}

function draw() {
  // afterimage effect
	fill(0, 40);
  noStroke();
	rect(0, 0, width, height);

  for (let i = 0; i < 5; i++) {
    polygon(500, 650, 70, 8);
    stroke(148, 235, 252, 178); //blue

    strokeWeight(2);
    noFill();
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 5.0);

  }

  for (let i = 0; i < 3; i++) {
    polygon(300, 650, 70, 8);
    stroke(252, 148, 205, 178); //pink
    strokeWeight(2);
    noFill();
    translate(width * 0.8, height * 0.8);
    rotate(frameCount / -3.0);

  }

  for (let i = 0; i < 5; i++) {
    polygon(250, 650, 70, 8);
    stroke(206, 255, 43, 250); //yellow
    strokeWeight(2);
    noFill();
    translate(width * 1, height * 0.5);
    rotate(frameCount / 2.0);
  }

}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
    noFill();
  }
  endShape(CLOSE);
}
