$(document).ready(function(){
  // Map the enter key to the go button
  $("#input").keyup(function(event) {
    if (event.keyCode === 13) {
      $("#inputBtn").click();
    }
  });

  // White star background
  var max = 100;
  var w = window.innerWidth;
  var h = window.innerHeight;
  var canvas = document.getElementById("sky");
  canvas.width = w;
  canvas.height = h;
  var ctx = canvas.getContext("2d");
  var radius = 1.5;

  for (var i = 0; i < max; i++){
    ctx.beginPath();
    ctx.arc(Math.floor((Math.random() * w)) , Math.floor((Math.random() * h)), radius, 0, 2*Math.PI, false);
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.fill();
  }

  // On click, make a star
  $("#skyWords").click(function(event) {
    ctx.beginPath();
    ctx.arc(event.clientX , event.clientY, radius, 0, 2*Math.PI, false);
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.fill();
  });
});