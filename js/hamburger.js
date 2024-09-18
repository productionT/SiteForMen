let hamburger = document.getElementById("js_hamburger");

let headerNavWrap = document.getElementById("js_headerNav");

hamburger.addEventListener(
  "click",
  () => {
    if (headerNavWrap.classList.contains("js_menuOpen")) {
      hamburger.setAttribute("aria-expanded", "false");
      headerNavWrap.classList.remove("js_menuOpen");
    } else {
      hamburger.setAttribute("aria-expanded", "true");
      headerNavWrap.classList.add("js_menuOpen");
    }
  },
  false
);
// 画面表示時のスクロールの禁止
