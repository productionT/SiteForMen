const title03Text = document.querySelectorAll(".e_title03__text");

const title03s = document.querySelectorAll(".e_title03");

let callback = (entries) => {
  for (let i = 0; i < title03Text.length; i++) {
    const keyframe = {
      opacity: [0, 1],
    };
    const options = {
      duration: 600,
      delay: i * 100,
      fill: "both",
    };
    title03Text[i].animate(keyframe, options);
  }
};

const observerRobot = new IntersectionObserver(callback);

title03s.forEach(function (title03) {
  observerRobot.observe(title03);
});
