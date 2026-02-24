import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";
import loadContact from "./contact.js";

export function createElement(tag, options = {}) {
  const el = document.createElement(tag);

  if (options.class) {
    el.classList.add(...options.class);
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

//TODO: NAV, MAINPANEL, TAB ACTIVE

function loadTab(tabId, mainPanel) {
  switch (tabId) {
    case "home":
      loadHome(mainPanel);
      break;
  }
}

function init() {
  const content = document.getElementById("content");
  const header = createHeader();

  content.appendChild(header);
}

document.addEventListener("DOMContentLoaded", init);
