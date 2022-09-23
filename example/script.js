const runButton = document.querySelector(".run");
const headerInput = document.querySelector(".header");
const subInput = document.querySelector(".sub-text");
const overlayInput = document.querySelector(".overlay");
const shortSizeInput = document.querySelector(".short-size");
const backgroundInput = document.querySelector(".close-background");
const closeIconInput = document.querySelector(".close-icon");

const btn1value = document.querySelector(".value.btn1");
const btn1closeBg = document.querySelector(".btn1-closebg");

const btn2value = document.querySelector(".value.btn2");
const btn2closeBg = document.querySelector(".btn2-closebg");

runButton.addEventListener("click", () => {

  popify({
    short: shortSizeInput.checked,
    overlay: overlayInput.checked,
    headerContent: headerInput.value,
    subText: subInput.value,
    closeIcon: closeIconInput.checked,
    buttons: [
      {
        text: btn1value.value,
        closePopup: btn1closeBg.checked,
      },
      {
        text: btn2value.value,
        closePopup: btn2closeBg.checked,
        class: 'lolsz'
      }
    ],
    closeOnBackground: backgroundInput.checked
  });

})