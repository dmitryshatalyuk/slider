export function slider(slider) {
  const sliderMin = 0;
  const sliderMax = 4108;

  const sliderBox = slider.querySelector(".slider");
  let currentPosition = 0;

  slider.addEventListener("scroll", () => {
    currentPosition = slider.scrollLeft;
  });

  document.querySelector(".button_box").addEventListener("click", (evt) => {
    let btnAction = evt.target.dataset.action;

    if (currentPosition < sliderMin) {
      currentPosition = sliderMin;
    } else if (currentPosition > sliderMax) {
      currentPosition = sliderMax - sliderBox.offsetWidth;
    }

    if (btnAction == "next") {
      currentPosition += sliderBox.offsetWidth;
      slider.scrollTo({
        left: currentPosition,
        behavior: "smooth",
      });
    } else {
      currentPosition -= sliderBox.offsetWidth;
      slider.scrollTo({
        left: currentPosition,
        behavior: "smooth",
      });
    }
  });
}
