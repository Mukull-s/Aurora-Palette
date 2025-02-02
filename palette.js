document.getElementById("gen").addEventListener("click", function() {
  
function RndColor() {
 const hex = "123456789ABCDEF";
 let color = "#";



  for (let i =0; i <6; i++) {
      color += hex[Math.floor(Math.random()*16)];
    }
    return color;
  }

  const boxes = document.querySelectorAll(".box");
  boxes.forEach(function(box) {
    box.style.backgroundColor = RndColor();
  });
});
