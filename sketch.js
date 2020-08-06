var drawing = []
var button;
function setup(){
    canvas = createCanvas(1200,800);
    //canvas.mousePressed(start)
    button = createButton('Clear Drawing')
    button.mousePressed(clearDrawing)
    database = firebase.database()
}

function draw(){
background("white");

read()
strokeWeight(4);
noFill();
stroke("black")
for (var i = 0; i < drawing.length; i++){
  vertex(drawing[i].x,drawing[i].y)}
endShape()
}

function mouseDragged(){
  var point = {x:mouseX, y:mouseY}
  drawing.push(point)
  var drawingref = database.ref('/').set({
    "currentPath" : drawing
  })
}

function read(){
  var drawref = database.ref('currentPath')
  drawref.on('value',(data)=>{
    drawing = data.val()
  })
}

function start(){
currentpath = []
drawing.push(currentpath)
var drawref = database.ref('currentPath')
drawref.on('value',(data)=>{
  newarray = data.val()
})
}

function clearDrawing(){
  drawing = []
}