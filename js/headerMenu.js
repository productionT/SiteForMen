const navButton = document.querySelector(".c_header__subNavTitle");
const subNav = document.getElementById("subNav");
console.log(subNav);
navButton.addEventListener(
  "click",
  () => {
    const state = navButton.getAttribute("aria-expanded");
    subNav.style.height = "auto";
    let h = subNav.offsetHeight;
    if (state === "false") {
      subNav.style.height = 0;
      navButton.setAttribute("aria-expanded", "true");
      subNav.animate(
        {
          height: [0, h + "px"],
        },
        300
      );
      subNav.style.height = "auto";
    } else {
      subNav.animate(
        {
          height: [h + "px", 0],
        },
        300
      );
      subNav.style.height = "0px";
      navButton.setAttribute("aria-expanded", "false");
      //   subNav.style.height = "0px";
    }
  },
  false
);
