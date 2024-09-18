const tablist = document.querySelector('[role="tablist"]');

const tab01 = document.querySelector('[aria-controls="tab01"]');
const tab02 = document.querySelector('[aria-controls="tab02"]');
const tab03 = document.querySelector('[aria-controls="tab03"]');

tab01.addEventListener(
  "click",
  () => {
    const tabPanel = document.querySelector(".c_news__tabPanel");
    tabPanel.remove();
    fetch("topics.html")
      .then((response) => response.text())
      .then((data) => tablist.insertAdjacentHTML("afterend", data));
  },
  false
);
tab02.addEventListener(
  "click",
  () => {
    const tabPanel = document.querySelector(".c_news__tabPanel");
    tabPanel.remove();
    fetch("parts.html")
      .then((response) => response.text())
      .then((data) => tablist.insertAdjacentHTML("afterend", data));
  },
  false
);
tab03.addEventListener(
  "click",
  () => {
    const tabPanel = document.querySelector(".c_news__tabPanel");
    tabPanel.remove();
    fetch("cars.html")
      .then((response) => response.text())
      .then((data) => tablist.insertAdjacentHTML("afterend", data));
  },
  false
);
