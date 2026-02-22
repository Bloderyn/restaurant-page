import "./style.css";
import createHomePage from "./home";
import createMenuPage from "./menu";
import createContactPage from "./contact";

function getContentDiv() {
  return document.querySelector("#content");
}

function clearContent() {
  const content = getContentDiv();
  content.textContent = "";
}

function loadHome() {
  clearContent();
  const content = getContentDiv();
  content.appendChild(createHomePage());
}

function loadMenu() {
  clearContent();
  const content = getContentDiv();
  content.appendChild(createMenuPage());
}

function loadContact() {
  clearContent();
  const content = getContentDiv();
  content.appendChild(createContactPage());
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll("nav button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}

function addNavEvents() {
  const homeBtn = document.querySelector('button[data-tab="home"]');
  const menuBtn = document.querySelector('button[data-tab="menu"]');
  const contactBtn = document.querySelector('button[data-tab="contact"]');

  homeBtn.addEventListener("click", () => {
    setActiveButton(homeBtn);
    loadHome();
  });

  menuBtn.addEventListener("click", () => {
    setActiveButton(menuBtn);
    loadMenu();
  });

  contactBtn.addEventListener("click", () => {
    setActiveButton(contactBtn);
    loadContact();
  });
}

addNavEvents();
loadHome();
setActiveButton(document.querySelector('button[data-tab="home"]'));

console.log("Restaurant page app running.");
