let images = document.querySelectorAll(".image");
images.forEach(function(img) {
  img.onclick = function () {
    let overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.8)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "10";
    
    let bigImg = document.createElement("img");
    bigImg.src = this.src;
    bigImg.style.maxWidth = "90%";
    bigImg.style.maxHeight = "90%";
    
    overlay.appendChild(bigImg);
    document.body.appendChild(overlay);
    
    overlay.onclick = function () {
      overlay.remove();
    };
  };
});