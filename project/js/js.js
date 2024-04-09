const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let Presure = 63.5;
let count = Presure/2;
let c_start = 0.75;
let c_end = 0.79;
let start = 0.75;
let end = 0.79;

if(Presure%2<1 && Presure%2>0){
count--;
}

if( count > 30){
count=30;
}

ctx.beginPath();
ctx.arc(175, 175, 88, 0, 360);
ctx.lineWidth = 4;
ctx.strokeStyle = "gray";
ctx.stroke();

ctx.beginPath();
ctx.arc(175, 175, 84, 0, 360);
ctx.lineWidth = 4;
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.arc(175, 175, 80, 0, 360);
ctx.fillStyle = "black";
ctx.fill();
ctx.lineWidth = 4;
ctx.strokeStyle = "gray";
ctx.stroke();


ctx.beginPath();
ctx.arc(175, 175, 60, 0.75 * Math.PI,0.25 * Math.PI);
ctx.lineWidth = 1;
ctx.strokeStyle = "white";
ctx.stroke();





for (let num = 0; num < 30; num++) {
  ctx.beginPath();
  ctx.arc(175, 175, 75, start * Math.PI, end * Math.PI);
  ctx.stroke();
  start += 0.05;
  end += 0.05;
}


// Loop to draw arcs
for (let num = 0; num < count; num++) {
  // Begin a new path for each arc
  ctx.beginPath();
  
  // Draw arc
  ctx.arc(175, 175, 68, c_start * Math.PI, c_end * Math.PI);
  ctx.lineWidth = 10;
  // Stroke the arc
  ctx.stroke();
  
  // Update start and end values
  c_start += 0.05;
  c_end += 0.05;
}

ctx.font = "14px Arial";
ctx.textBaseline = "middle";
ctx.textAlign = "center";
ctx.fillStyle = "white";
let angle = 135; // Initial angle
const step = 45; // Step size for the digits

for (let num = 0; num < 70; num=num+10) {
  const radians = (angle * Math.PI) / 180;
  const radius = 50;
  const x = 175 + radius * Math.cos(radians);
  const y = 175 + radius * Math.sin(radians);
  ctx.fillText(num.toString(), x, y);
  angle += step;
}

  ctx.font = "18px Arial";
  ctx.fillText(Presure.toString(), 175, 175);
  
  let boost = "boost";
  ctx.font = "14px Lucida Handwriting";
  ctx.fillText(boost, 175, 230);
  
  const logoImage = new Image();
  logoImage.src = "images/logo.png"; // Replace with your logo file path

  // Wait for the image to load
  logoImage.onload = () => {
    // Draw the logo on the canvas
    ctx.drawImage(logoImage, 167, 237, 15, 15); // Adjust position and size as needed
  };