

let destinationX; 
  let destinationY; 
drawToPoint=false

let point1X
let point1Y
let point2X
let point2Y
    //wow how cool a colour palette
/*let pink = color(255, 77, 188);
let fluro = color (218, 255, 0);
fluro half = 237, 255, 127 YES!
fluro 30 = 244, 255, 179
let gum = color (108, 137, 96);
let burn = color (204, 77, 0);
let rich = color (86, 137, 0);
let purple = color (108, 41, 70);
let brown = color (86, 41, 0);  

*/


function setup() {
  createCanvas(windowWidth, windowHeight);
  //wow how cool a colour palette

  
  background(244, 255, 179);
}

function draw() {
  
  

 //this controls where the line goes to. Now it should be in any direction from point
  
/*  if (drawToPoint==false){
  let destinationX = mouseX+random(-width/5,width/5);
  let destinationY =mouseY+random(-height/5,height/5);
      } else if (drawToPoint== true){
    destinationX = x1;
    destinationY = y1;
  }*/
  let point1X = width/3
  let point1Y = height/4
  let  point2X = 4*width/3
  let point2Y = height/2
  //if distance of mouse to point 1 is less than distance of mouse to point 2 then distination is point 1 otherwise destination isn point 2
   let destinationX = width/2;
  let destinationY =height/2;

  stroke (255, 77, 188, 20);
  strokeWeight(2);
  
  //what is this error when I try to change desitnation X and Y and I continue to get something called empy variable???
line (mouseX, mouseY, destinationX, destinationY);
  line (mouseX, mouseY, destinationX, destinationY);
  line (mouseX, mouseY, destinationX, destinationY);
  line (mouseX, mouseY, destinationX, destinationY);
  line (mouseX, mouseY, destinationX, destinationY);
  
  stroke (108, 41, 70, 10);
  line (mouseX, mouseY, random(-width,width), random(-height,height));

  noStroke ();
  textAlign (LEFT);
  textSize(width/65);
// fill (86, 137, 0);
  text ('gesture as choreography of the not yet conscious', width/2, height/2, width/2)
  text ('as ephemera', 9*width/12, 10*height/18);
  text ('as trace', 9*width/12, 11*height/18);
  text ('the lilt in the walk of a particularly confident woman', width/5, 6*height/7)
  text ('a drug-tinged memory', 4*width/5, height/6)
 text ('the lingering handshake between recent acquaintances', 3*width/5, 5*height/6)
   text ('the tilt of an ankle in very high heels', 2*width/5, height/6)
 
  
    

  drawStroke();
 
  //can I get these to point towards the outline of a shape?? Instead of just randomly. yes with distance function to a point but maybe also to a line? Or multiple lines that form a shape??? Idk but maybe for another day....?
}

  function drawStroke(){

  fill(244, 255, 179);
  noStroke()
  ellipse(mouseX, mouseY, 4);
  ellipse(mouseX, mouseY, 4);
  ellipse(mouseX, mouseY, 4);
  ellipse(mouseX, mouseY, 4);
   ellipse(mouseX, mouseY, 4);
  ellipse(mouseX, mouseY, 4);
  ellipse(mouseX, mouseY, 4);
  ellipse(mouseX, mouseY, 4); //is there a better way to do this??
}

/* function mousePressed(){
    fill(0)
    ellipse (mouseX, mouseY, 5);
    x1=mouseX;
    y1=mouseY;
    drawToPoint==true;
  }*/
//rip this doesnt work but thats okay. 