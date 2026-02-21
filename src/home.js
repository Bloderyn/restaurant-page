export default function createHomePage() {
  const home = document.createElement("div");
  home.classList.add("home");

  const title = document.createElement("h1");
  title.textContent = "Blod's Cozy Tavern";

  const subtitle = document.createElement("p");
  subtitle.textContent = "The warmest soups and breads of all the realms.";

  const description = document.createElement("p");
  description.textContent =
    "Come in, sit by the fire, and let the world outside freeze.";

  home.appendChild(title);
  home.appendChild(subtitle);
  home.appendChild(description);

  return home;
}
