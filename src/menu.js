export default function createMenuPage() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const title = document.createElement("h2");
  title.textContent = "Menu";

  const list = document.createElement("ul");

  const items = [
    "Pumpkin Soup of the Void",
    "Shadow-Braised Mushrooms",
    "Hellfire Spiced Bread",
    "Aether-infused Herbal Tea",
  ];

  items.forEach((itemText) => {
    const li = document.createElement("li");
    li.textContent = itemText;
    list.appendChild(li);
  });

  menu.appendChild(title);
  menu.appendChild(list);

  return menu;
}
