var speed = 10;
var left = -Math.PI/9;
var right = Math.PI/9;
var angle = 0;
var prevStateSpeed = [];




function mouseFunction1() {
  var click = document.getElementById(cs1);
   speed = speed +2;
   	prevStateSpeed.push(speed);
    document.getElementById("cursor_speed").value = speed;
	console.log(speed);
	//console.log(prevStateSpeed);
}
function mouseFunction2() {
  var click = document.getElementById(cs1);
   speed = speed -2;
	prevStateSpeed.push(speed);
   document.getElementById("cursor_speed").value = speed;
	console.log(speed);
}

function undoSpeed(){
 if(typeof prevStateSpeed[0] !== 'undefined' && prevStateSpeed.length > 1){

	speed = prevStateSpeed[prevStateSpeed.length-2];
	prevStateSpeed.splice(-1,1)
  document.getElementById("cursor_speed").value = speed;
	console.log(speed);}
  else 
    speed = 10;
}



function togglefunction(){
	var toggle = document.getElementsByTagName("checkbox");
	if(toggle)
	console.log("sipNpuff reversed");

	else
	console.log("NOOOO!");
}
//reset settings
function mouseFunction3() {
  var mouseMovement = document.getElementById(cs1);
   speed = 10;
   console.log(document.getElementById("cursor_speed"));
   document.getElementById("cursor_speed").value = speed;
	console.log(speed);


}






function mouseFunction4() {
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

/*
.beginPath();
ctx.arc(120,120,120,0,2*Math.PI);
ctx.moveTo(120,240);
ctx.lineTo(120,0);
ctx.stroke();
ctx.moveTo(0,120);
ctx.lineTo(240,120);
ctx.stroke();
ctx.fillRect(0,235,5,5); // bottom left
ctx.fillRect(235,235,5,5); // bottom right
ctx.fillRect(0,0,5,5); // top left
ctx.fillRect(235,0,5,5); // top right
*/

var map = [
  {x: 0, y: 235, w: 5, h: 5},
    {x: 235, y: 235, w: 5, h: 5},
      {x: 0, y: 0, w: 5, h: 5},
        {x: 235, y: 0, w: 5, h: 5}
];
var hover = false, id;
var _i, _b;
function renderMap() {
    for(_i = 0; _b = map[_i]; _i ++) {
        ctx.fillStyle = (hover && id === _i) ? "red" : "blue";
        ctx.fillRect(_b.x, _b.y, _b.w, _b.h);
    }
}
// Render everything
renderMap();
myCanvas.onmousemove = function(e) {
    // Get the current mouse position
    var r = myCanvas.getBoundingClientRect(),
        x = e.clientX - r.left, y = e.clientY - r.top;
    hover = false;

    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    
    for(var i = map.length - 1, b; b = map[i]; i--) {
        if(x >= b.x && x <= b.x + b.w &&
           y >= b.y && y <= b.y + b.h) {
            // The mouse honestly hits the rect
            hover = true;
            id = i;
            break;
        }
    }
 


    console.log(hover);
    if(hover = true){

    }
    // Draw the rectangles by Z (ASC)
    renderMap();
}
}
