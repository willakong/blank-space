function disappear() {
  var inputText = $("#input").val();
  if (inputText === "") return;
  $("#input").val("");

  // Arrange text into an array of letters
  inputText = inputText.replace(/\s+/g, '');
  inputText = inputText.split("");

  // Word effect
  var canvas = document.getElementById("skyWords");
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;

  var font_size = 20;
  var columns = (w / font_size) * 0.8;
  var drops = [];
  for(var i = 0; i < columns; i++) {
    var text = inputText[Math.floor(Math.random() * inputText.length)];
    drops.push({
      x: Math.random() * w,
      y: 1,
      dy: Math.random() * 8,
      text: text
    });
  }

  var ctx = canvas.getContext("2d");
  ctx.font = font_size + "px sans-serif";
  ctx.fillStyle = "rgb(255, 255, 255, 1.0)";

  function draw()
  {
    ctx.clearRect(0, 0, w, h);
    for(var i = 0; i < drops.length; i++) {
      drops[i].y = drops[i].y + drops[i].dy;
      ctx.fillText(drops[i].text, drops[i].x, drops[i].y);
    }
  }

  var drawInterval = setInterval(draw, 30);

  // Stop drawing after 5s and clear the sky
  setTimeout(function(){
    clearInterval(drawInterval);

    // Fade out the remaining text
    var alpha = 1.0
    var fadeInterval = setInterval(function(){
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgb(168, 169, 181, " + alpha + ")";
      for(var i = 0; i < drops.length; i++) {
        drops[i].y = drops[i].y + drops[i].dy;
        ctx.fillText(drops[i].text, drops[i].x, drops[i].y);
      }
      alpha -= 0.05;
      if (alpha < 0) {
        ctx.clearRect(0, 0, w, h);
        clearInterval(fadeInterval);
      }
    }, 50);

  }, 6000);
}