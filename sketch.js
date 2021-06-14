var button1,button2


function setup() {
  createCanvas(600, 400);
  background("blue");
button1 = createButton("red")
button1.position(200,150)
button1.mousePressed(red_bg)
button2 = createButton("green")
button2.position(350,150)
button2.mousePressed(green_bg)
}

function draw() {
 // background("blue");
}

function red_bg(){
background ("red")



}

function green_bg(){
background ("green")


}