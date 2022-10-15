/*
 Github: https://github.com/chill31/popifyJS/README.md
 Source Code [SRC / Scripts]
*/

document.head.innerHTML += `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
`

function popify(options) {
  
  let popifyIcon = ` `;
  let popifyHeader = ` `;
  let popifyBtns = ` `;
  let popifySubText = ` `;
  let popifyCloseIcon = ` `;

  const mainPop = document.createElement("div");
  mainPop.classList.add("popify-main"); // overlay

  if(options.short == true) {
    mainPop.classList.add("short");
  } else {
    mainPop.classList.remove("short");
  }

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

    if(options.icon) {
    iconOptions.forEach((option) => {

      if(options.icon == option.name) {
        mainPop.classList.add("icon-visible");
        popifyIcon = `
          <i class="${option.code} popify-icon icon-${option.name}"></i>
        `;
      } else {

      }

    });
  }
    
  
    // header HTML 
    if (options.headerContent) {
      popifyHeader = `
        <span class="popify-header">${options.headerContent}</span>      
      `;
    } else {
      popifyHeader = ``;
    }

    // subText HTML
    if(options.subText) {

      popifySubText = `
        <span class="popify-subtext">${options.subText}</span>
      `
    } else {
      popifySubText = ``;
    }

    // buttons HTML.
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

    // closeIcon HTML.
    if(options.closeIcon == true) {
      popifyCloseIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" class="popify-close" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg>
      `;
    } else {
      popifyCloseIcon = ``;
    }

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
    
    document.body.append(mainPop);

    if(options.closeOnBackground == true) {
      mainPop.addEventListener("click", (e) => {
        if(e.target.classList.contains("popify-main")) {
          mainPop.remove();
        }
      });
    } else {
      // do nothing.
    }

    const closeIcon = mainPop.querySelector(".popify-close");
    if(!closeIcon) {

    } else {
      closeIcon.addEventListener("click", () => {
        mainPop.remove();
      })
    }

    document.querySelectorAll(".popify-btn").forEach((btn, index) => {

      btn.addEventListener("click", (e) => {

        if(btn.classList.contains("close-popup-btn")) {
          mainPop.remove();
          if(options.buttons[index].run) {
            options.buttons[index].run();
          }
        } else {
          if(options.buttons[index].run) {
            options.buttons[index].run();
          }
        }
      
      })

    });

    if(options.closeOnEscape == true) {

      addEventListener("keydown", (e) => {

        if(e.key.toLowerCase() == "escape") {
          mainPop.remove();
        } else {
          return;
        }

      })

    } else {
      return;
    }

}