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
  const header = createElement("header", { classes: ["site-header"] });

  const brand = createElement("div", { classes: ["brand-block"] });

  const title = createElement("h1", {
    classes: ["brand-title"],
    text: "The Gilded Wyvern",
  });

  const subtitle = createElement("p", {
    classes: ["brand-subtitle"],
    text: "Grand Hall and Supper Club",
  });

  const eyebrow = createElement("span", {
    classes: ["brand-eyebrow"],
    text: "By candlelight and crownfire",
  });

  brand.appendChild(eyebrow);
  brand.appendChild(title);
  brand.appendChild(subtitle);

  const nav = createNav();
  header.appendChild(brand);
  header.appendChild(nav);

  return header;
}

function createNav() {
  const nav = createElement("nav", {
    classes: ["site-nav"],
    attrs: { "aria-label": "Primary" },
  });

  const tabsInfo = [
    { id: "home", label: "Grand Hall" },
    { id: "menu", label: "Curated Menu" },
    { id: "about", label: "Lore" },
    { id: "contact", label: "Reservations" },
  ];

  tabsInfo.forEach((tab, index) => {
    const btn = createElement("button", {
      classes: ["site-nav-link"],
      text: tab.label,
      attrs: { "data-tab": tab.id, type: "button" },
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
  const footer = createElement("footer", { classes: ["site-footer"] });

  const left = createElement("div", {
    html:
      '<span class="footer-label">House promise</span> Velvet service, open hearths, and a table set for bold company.',
  });

  const right = createElement("div", {
    html:
      '<span class="footer-label">Evening hours</span> Doors open at dusk. Private feasts by arrangement.',
  });

  footer.appendChild(left);
  footer.appendChild(right);

  return footer;
}

function setActiveTab(tabId) {
  const buttons = document.querySelectorAll(".site-nav-link");
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
    const tabTrigger = e.target.closest("[data-tab]");
    if (!tabTrigger) return;

    const tabId = tabTrigger.getAttribute("data-tab");
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
