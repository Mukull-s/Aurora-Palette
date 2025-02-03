document.getElementById("gen").addEventListener("click", function() {

  function RndColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const boxes = document.querySelectorAll(".box");

  boxes.forEach(function(box) {
    const color = RndColor();
    box.style.backgroundColor = color;
    const span = box.querySelector("span");
    span.textContent = color;
  });

  document.querySelectorAll(".copy-icon").forEach(function(copyIcon) {
    copyIcon.removeEventListener('click', handleClick); // Clean up previous listeners
    copyIcon.addEventListener('click', function() { handleClick(copyIcon) }); // Add listener
  });
});

function handleClick(copyIcon) {
  const code = copyIcon.parentElement.querySelector("span").textContent;

  navigator.clipboard.writeText(code).then(function() {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.textContent = "Copied!";
    copyIcon.parentElement.appendChild(popup);

    setTimeout(function() {
      popup.remove();
    }, 1000);
  }).catch(function(err) {
    console.error("failed to copy: ", err);
  });
}
