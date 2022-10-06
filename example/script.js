const runButton = document.querySelector(".run");
const headerInput = document.querySelector(".header");
const subInput = document.querySelector(".sub-text");
const overlayInput = document.querySelector(".overlay");
const shortSizeInput = document.querySelector(".short-size");
const backgroundInput = document.querySelector(".close-background");
const closeIconInput = document.querySelector(".close-icon");
const closeEscapeInput = document.querySelector(".close-escape");
const iconInput = document.querySelector(".select-icon");

const btn1value = document.querySelector(".value.btn1");
const btn1closeBg = document.querySelector(".btn1-closebg");
const btn1TypeSelect = document.querySelector(".btn1-type");
const btn1icon = document.querySelector(".value.btn1-icon");

const btn2value = document.querySelector(".value.btn2");
const btn2closeBg = document.querySelector(".btn2-closebg");
const btn2TypeSelect = document.querySelector(".btn2-type");
const btn2icon = document.querySelector(".value.btn2-icon");

runButton.addEventListener("click", () => {

  popify({
    short: shortSizeInput.checked,
    overlay: overlayInput.checked,
    icon: iconInput[iconInput.selectedIndex].value,
    headerContent: headerInput.value,
    subText: subInput.value,
    closeIcon: closeIconInput.checked,
    buttons: [
      {
        text: btn1value.value,
        closePopup: btn1closeBg.checked,
        icon: btn1icon.value,
        class: 'popup-btn-1',
        type: btn1TypeSelect[btn1TypeSelect.selectedIndex].value,
        run: () => {
          console.log("Button 1 click");
        }
      },
      {
        text: btn2value.value,
        closePopup: btn2closeBg.checked,
        icon: btn2icon.value,
        class: 'popup-btn-2',
        type: btn2TypeSelect[btn2TypeSelect.selectedIndex].value,
        run: () => {
          console.log("Button 2 click");
        }
      },
    ],
    closeOnBackground: backgroundInput.checked,
    closeOnEscape: closeEscapeInput.checked,
  });

});

const gitBtn = document.querySelector(".docs");
gitBtn.addEventListener("click", () => {
  window.location.href = "https://github.com/PopifyJS/PopifyJS.github.io/";
});