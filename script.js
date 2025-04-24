// Bunga jatuh lucu
function createFlower() {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(flower);
  
    setTimeout(() => {
      flower.remove();
    }, 8000);
  }
  
  // Bikin bunga terus-menerus
  setInterval(createFlower, 500);
  