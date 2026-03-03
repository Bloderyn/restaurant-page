import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";
import loadContact from "./contact.js";

const TAB_TRANSITION_MS = 220;

export function createElement(tag, options = {}) {
  const el = document.createElement(tag);

  if (options.classes) {
    el.classList.add(...options.classes);
  }

  if (options.text) {
    el.textContent = options.text;
  }

  if (options.html) {
    el.innerHTML = options.html;
  }

  if (options.attrs) {
    Object.entries(options.attrs).forEach(([key, value]) => {
      el.setAttribute(key, value);
    });
  }

  if (options.children) {
    options.children.forEach((child) => el.appendChild(child));
  }

  if (options.imgSrc) {
    el.src = options.imgSrc;
  }

  return el;
}

function createHeader() {
  const header = createElement("header", { classes: ["tavern-header"] });

  const title = createElement("h1", {
    classes: ["tavern-title"],
    text: "The Drunken Wyvern",
  });

  const subtitle = createElement("p", {
    classes: ["tavern-subtitle"],
    text: "EST. Somewhere Between Wars",
  });

  header.appendChild(title);
  header.appendChild(subtitle);

  const nav = createNav();
  header.appendChild(nav);

  return header;
}

function createNav() {
  const nav = createElement("nav", { classes: ["nav-tabs"] });

  const tabsInfo = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  tabsInfo.forEach((tab, index) => {
    const btn = createElement("button", {
      classes: ["nav-tab"],
      text: tab.label,
      attrs: { "data-tab": tab.id },
    });

    if (index === 0) btn.classList.add("active");
    nav.appendChild(btn);
  });

  return nav;
}

function createMainPanel() {
  return createElement("main", { classes: ["main-panel"] });
}

function createFooter() {
  const footer = createElement("footer", { classes: ["tavern-footer"] });

  const left = createElement("div", {
    text: "No questions about the stains on the ceiling, please.",
  });

  const right = createElement("div", {
    text: "House motto · Pay your tab before dawn.",
  });

  footer.appendChild(left);
  footer.appendChild(right);

  return footer;
}

function setActiveTab(tabId) {
  const buttons = document.querySelectorAll(".nav-tab");
  buttons.forEach((btn) => {
    const isActive = btn.getAttribute("data-tab") === tabId;
    btn.classList.toggle("active", isActive);
  });
}

function loadTab(tabId, mainPanel) {
  switch (tabId) {
    case "home":
      loadHome(mainPanel);
      break;
    case "menu":
      loadMenu(mainPanel);
      break;
    case "about":
      loadAbout(mainPanel);
      break;
    case "contact":
      loadContact(mainPanel);
      break;
    default:
      loadHome(mainPanel);
  }
}

function init() {
  const content = document.getElementById("content");
  const header = createHeader();
  const mainPanel = createMainPanel();
  const footer = createFooter();
  let currentTabId = "home";
  let isTabTransitioning = false;

  content.appendChild(header);
  content.appendChild(mainPanel);
  content.appendChild(footer);

  loadHome(mainPanel);

  content.addEventListener("click", (e) => {
    if (!e.target.classList.contains("nav-tab")) return;

    const tabId = e.target.getAttribute("data-tab");
    if (tabId === currentTabId || isTabTransitioning) return;

    isTabTransitioning = true;
    setActiveTab(tabId);
    mainPanel.classList.add("panel-transition-out");

    window.setTimeout(() => {
      loadTab(tabId, mainPanel);
      currentTabId = tabId;
      mainPanel.classList.remove("panel-transition-out");
      mainPanel.classList.add("panel-transition-in");

      window.setTimeout(() => {
        mainPanel.classList.remove("panel-transition-in");
        isTabTransitioning = false;
      }, TAB_TRANSITION_MS);
    }, TAB_TRANSITION_MS);
  });
}

document.addEventListener("DOMContentLoaded", init);
