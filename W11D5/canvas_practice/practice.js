document.addEventListener("DOMContentLoaded", function(){

  const canvasElement = document.getElementById("mycanvas");
  canvasElement.width = 500;
  canvasElement.height = 500; 


  const ctx = canvasElement.getContext("2d");
  ctx.fillStyle = "lavender"; 
  ctx.fillRect(0, 0, 600, 600);

  ctx.beginPath(); 
  ctx.arc(100, 100, 80, 0, 2 * Math.PI, true);
  ctx.strokeStyle = "white"; 
  ctx.lineWidth = 10; 
  ctx.stroke();

  ctx.fillStyle = "pink";
  ctx.fill();
});
