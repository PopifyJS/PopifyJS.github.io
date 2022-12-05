document.head.innerHTML += `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">`;

const menuEl = document.createElement("div");
menuEl.classList.add("menu-main");

menuEl.innerHTML = `
<div class="menu">
<div class="top-content">
  <div class="sidebar-head">
  <a href="/" class="sidebar-title">PopifyJS Docs</a>
  </div>

  <div class="close-sidebar" style="color: var(--color)">
    <i class="bi-x-lg"></i>
  </div>
</div>
<div class="main-content">

  <a class="sidebar-content sidebar-link" href="https://github.com/popifyjs/popifyjs.github.io">Github</a>
  <a class="sidebar-content sidebar-link" href="/docs">Docs</a>
  <a class="sidebar-content sidebar-link" href="/docs/api">API Reference</a>
  <a class="sidebar-content sidebar-link" href="/docs/examples">Examples</a>

</div>
</div>
`;

document.body.prepend(menuEl);

const closeSidebar = document.querySelector(".close-sidebar");
closeSidebar.addEventListener("click", () => {
  menuEl.classList.remove("load");
});

const parentMenu = document.querySelector(".menu-main");
parentMenu.addEventListener("click", (e) => {
  if(e.target.classList.contains("menu-main")) {
  parentMenu.classList.remove("load");
  }
});

const headerEl = document.createElement("header");
headerEl.innerHTML = `
<div class="left-content">
  <div class="menu-button">
    <i class="bi-list"></i>
  </div>

  <div class="title">
    <i class="bi-chat-square-dots-fill head-logo"></i>
    <a href="/" class="head-title">PopifyJS Docs</a>
  </div>

  <a href="/docs" class="link tutorial">Docs</a>
  <a href="/docs/examples" class="link examples">Examples</a> 
</div>

<div class="right-content">
  <a href="https://github.com/popifyjs/popifyjs.github.io" class="redirect-github">
    Github <i class="bi-box-arrow-up-right"></i>
  </a>
</div>
`;

document.body.prepend(headerEl);

const menuBtn = document.querySelector(".menu-button");

menuBtn.addEventListener("click", () => {
  menuEl.classList.toggle("load");
});