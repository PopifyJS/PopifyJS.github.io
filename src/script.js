/*
 Github: https://github.com/chill31/popifyJS/README.md
 Source Code [SRC / Scripts]
*/


// loading bootstrap icons.
document.head.innerHTML += `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
`;

function popify(options) {
  
  // defining HTML variables.
  let popifyIcon = ` `;
  let popifyHeader = ` `;
  let popifyBtns = ` `;
  let popifySubText = ` `;
  let popifyCloseIcon = ` `;


  // creating the overlay (main container)
  const mainPop = document.createElement("div");
  mainPop.classList.add("popify-main"); // overlay


  // short size conditions
  if(options.short == true) {
    mainPop.classList.add("short");
  } else {
    mainPop.classList.remove("short");
  }

  // overlay conditions
  if (options.overlay == true) {
    // do nothing.
  } else {
    mainPop.classList.add("overlay-none");
  }

    const iconOptions = [
      {
        name: 'success',
        code: 'bi-check-circle',
      },
      {
        name: 'error',
        code: 'bi-x-circle',
      },
      {
        name: 'warning',
        code: 'bi-exclamation-circle',
      },
      {
        name: 'info',
        code: 'bi-info-circle',
      },
      {
        name: 'question',
        code: 'bi-question-circle',
      }
    ];

    // checking if icon value is valid and adding the popup icon
    if(options.icon) {
      iconOptions.forEach((option) => {
        if(options.icon == option.name) {
          mainPop.classList.add("icon-visible");
          popifyIcon = `
            <i class="${option.code} popify-icon icon-${option.name}"></i>
          `;
        } else {
          // do nothing
        }
      });
    }
    
  
    // setting the header content 
    if (options.headerContent) {
      popifyHeader = `
        <span class="popify-header">${options.headerContent}</span>      
      `;
    } else {
      popifyHeader = ``;
    }

    // setting sub text value
    if(options.subText) {

      popifySubText = `
        <span class="popify-subtext">${options.subText}</span>
      `
    } else {
      popifySubText = ``;
    }

    // creating buttons as per the values and options.
    if(options.buttons) {
      options.buttons.forEach((btn) => {

        if(btn.closePopup == true) {
          popifyBtns += `
            <button class="${btn.class} popify-btn close-popup-btn ${btn?.type?.toLowerCase()}">
              <i class="bi-${btn?.icon?.replaceAll(" ", "-")}"></i>
              ${btn.text}
            </button>
          `;
        } else {
          popifyBtns += `
            <button class="${btn.class} popify-btn ${btn?.type?.toLowerCase()}">
              <i class="bi-${btn?.icon?.replaceAll(" ", "-")}"></i>
              ${btn.text}
            </button>
          `;
        }

      });
    } else {
      popifyBtns = ``;
    }

    // adding the close icon.
    if(options.closeIcon == true) {
      popifyCloseIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" class="popify-close" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg>
      `;
    } else {
      popifyCloseIcon = ``;
    }

    // putting each element inside the main div.
    mainPop.innerHTML = `
    <div class="popify-app">
     ${popifyCloseIcon}

     ${popifyIcon}

     ${popifyHeader}
     ${popifySubText}

     <div class="popify-btn-group">
      ${popifyBtns}
     </div>
    </div>
    `;

    // adding it to the body.    
    document.body.append(mainPop);

    // checking if the close on background click option is enabled or not.
    if(options.closeOnBackground == true) {
      mainPop.addEventListener("click", (e) => {
        if(e.target.classList.contains("popify-main")) {
          mainPop.remove();
        }
      });
    } else {
      // do nothing.
    }

    // getting the close icon in order to close the popup.
    const closeIcon = mainPop.querySelector(".popify-close");
    if(!closeIcon) {

    } else {
      closeIcon.addEventListener("click", () => {
        mainPop.remove();
      })
    }

    // getting all the buttons 
    document.querySelectorAll(".popify-btn").forEach((btn, index) => {

      btn.addEventListener("click", () => {

        // if there is a close class to the button, close the main popup on click.
        if(btn.classList.contains("close-popup-btn")) {
          mainPop.remove();
        }
        
        // run the click function if given.
        if(options.buttons[index].run) {
          options.buttons[index].run();
        }
      
      });

    });

    // closing the popup on escape key press if it's set to true.
    if(options.closeOnEscape == true) {

      addEventListener("keydown", (e) => {

        if(e.key.toLowerCase() == "escape") {
          mainPop.remove();
        } else {
          return;
        }

      })

    } else {
      // do nothing
    }

}