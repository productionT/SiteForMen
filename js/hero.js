const splashBg = document.querySelector(".l_main__splashBg");

const splashBgUnder = document.querySelector(".l_main__splashBgUnder");

const heroImg = document.getElementById("js_heroImg");

const imgList = ["main_01.jpg", "main_02.jpg", "main_03.jpg"];

let imgNumber = 0;

document.addEventListener(
  "DOMContentLoaded",
  function () {
    if (splashBg.classList.contains("appear")) {
      setTimeout(function () {
        splashBg.classList.remove("appear");
        splashBgUnder.classList.remove("appear");
      }, 3000);
    }
  },
  false
);

window.addEventListener(
  "load",
  function () {
    setInterval(function () {
      if (imgNumber >= imgList.length - 1) {
        imgNumber = 0;
      } else {
        imgNumber++;
      }
      const keyframe = {
        scale: [1.5, 1],
        opacity: [0, 1],
      };
      heroImg.setAttribute("src", "img/" + imgList[imgNumber]);
      const options = {
        duration: 800,
      };

      heroImg.animate(keyframe, options);
    }, 3000);
  },
  false
);
