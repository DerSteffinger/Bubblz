class Bubble{
  constructor(x,y,r,g,b){
    this.x = random(0,width);
    this.y = random(0,height);
  }

  blink(){/*makes the Bubble colorblinking*/
    this.r = random(0,255);
    this.g = random(0,255);
    this.b = random(0,255);
  }

  move(){/*makes the Bubble moving randomly*/
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show(){/*makes the Bubble what it visible*/
    stroke(this.r,this.g,this.b);
    strokeWeight(4);
    noFill();
    ellipse(this.x,this.y,24,24);
  }

  border(){/*resets position if Bubble hits a border*/
    if(this.x>width){
      this.x = random(0,width);
    }else if (this.y>height) {
      this.y = random(0,width);
    }

    if(this.x<0){
      this.x = random(0,width);
    }else if (this.y<0) {
      this.y = random(0,width);
    }

  }
}
