// Get canvas element
const canvas  = document.getElementById('triangle');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function render_triangle(x = getRandomInt(1, window.innerWidth), y = getRandomInt(1, window.innerHeight)) {
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(let i = 0; i <6; i++){
    ctx.beginPath();
    let x_1 = x;
    let x_2 = getRandomInt(1, window.innerWidth);
    let x_3 = getRandomInt(1, window.innerWidth);
    let y_1 = y;
    let y_2 = getRandomInt(1, window.innerHeight);
    let y_3 = getRandomInt(1, window.innerHeight);
    ctx.fillStyle = colors[i];
    ctx.moveTo(x_1,y_1);
    ctx.lineTo(x_2,y_2);
    ctx.lineTo(x_3,y_3);
    ctx.fill();
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    cnt = i + 1;
    ctx.fillText(cnt,(x_1+x_2+x_3)/3 , (y_1+y_2+y_3)/3);

  }
}
const colors = ["Red", "Pink","Orange","Yellow","Gold","Violet","Indigo","Blue","SaddleBrown","Lime"];
if (canvas.getContext){
  render_triangle();
}
canvas.addEventListener('mousemove', function (e) {
  render_triangle(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
});
