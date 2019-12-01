let bubble;

function setup() {
  createCanvas(800,800);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
}


  function draw() {
    background(51);
    bubble1.border();
    bubble2.border();
    bubble1.blink();
    bubble2.blink();
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
  }
