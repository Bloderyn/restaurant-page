import { createElement } from "./index.js";
import wyvernfireStewImage from "../images/wyvernfire-stew.png";
import blackwaldMushPieImage from "../images/blackwald-mush-pie.png";
import charredDragonImage from "../images/charred-dragon.png";
import emberwineImage from "../images/emberwine.png";
import moonlitOrchardImage from "../images/moonlit-orchard.png";
import travelerBreadImage from "../images/traveler-bread.png";
import emberImage from "../images/ember.png";
import wolfbornImage from "../images/wolfborn.png";
import hearthfireImage from "../images/hearthfire.png";
import krakenImage from "../images/kraken.png";
import forestImage from "../images/forest.png";
import riverImage from "../images/river.png";

export default function loadMenu(mainPanel) {
  mainPanel.innerHTML = "";

  const menuCard = createElement("section", { classes: ["card"] });
  const header = createElement("div", { classes: ["card-header"] });

  const title = createElement("h2", {
    classes: ["card-title"],
    text: "Tavern Fare",
  });

  const tagline = createElement("span", {
    classes: ["card-tagline"],
    text: "Hearty stews and questionable spirits",
  });

  header.appendChild(title);
  header.appendChild(tagline);

  const body = createElement("div", { classes: ["card-body"] });

  const menuGrid = createElement("div", { classes: ["menu-grid"] });

  const menuTabs = [
    { id: "meals", label: "Meals" },
    { id: "drinks", label: "Drinks" },
    { id: "desserts", label: "Desserts" },
  ];

  function createMenuNav() {
    const itemsNav = createElement("nav", { classes: ["menu-nav"] });

    menuTabs.forEach((tab, index) => {
      const btn = createElement("button", {
        classes: ["menu-tab"],
        text: tab.label,
        attrs: { "data-tab": tab.id },
      });

      if (index === 0) btn.classList.add("active");
      itemsNav.appendChild(btn);
    });

    return itemsNav;
  }

  function setActiveMenuTab(navElement, tabId) {
    const buttons = navElement.querySelectorAll(".menu-tab");
    buttons.forEach((btn) => {
      const isActive = btn.getAttribute("data-tab") === tabId;
      btn.classList.toggle("active", isActive);
    });
  }

  const items = [
    {
      imgSrc: wyvernfireStewImage,
      category: "meals",
      name: "Wyvernfire Stew",
      price: "8 silver",
      desc: "Slow-cooked stag, root vegetables, and ember-spice broth thick enough to stand a spoon in.",
      tag: "House specialty · Served with charred bread",
    },
    {
      imgSrc: blackwaldMushPieImage,
      category: "meals",
      name: "Blackwald Mushroom Pie",
      price: "6 silver",
      desc: "Flaky crust filled with forest mushrooms, caramelized onions, and a suspicious hint of moon-herb.",
      tag: "Vegetarian · Best with cider",
    },
    {
      imgSrc: charredDragonImage,
      category: "meals",
      name: "Charred Dragonwing Skewers",
      price: "10 silver",
      desc: "Spicy skewers slathered in hellpepper glaze. The innkeep swears the wings were sourced from a dragon that died of old age, but the charred flavor is more likely from the cooking process.",
      tag: "Spicy · Not for the faint of heart",
    },

    {
      imgSrc: emberImage,
      category: "meals",
      name: "Ember-Root Harvest Soup",
      price: "7 silver",
      desc: "A thick autumnal soup made of ember-carrots, moon-onions, and smoked barley simmered in a glowing copper pot. Served with herb-butter toast warmed on the tavern hearth.",
      tag: "Vegetarian · Served with toast",
    },
    {
      imgSrc: travelerBreadImage,
      category: "meals",
      name: "Traveler's Bread and Ashen Butter",
      price: "2 silver",
      desc: "Dense black bread with smoked salt butter whipped to airy perfection.",
      tag: "Good with any stew",
    },
    {
      imgSrc: wolfbornImage,
      category: "meals",
      name: "Wolfborn Shepherd's Pie",
      price: "9 silver",
      desc: "Layers of root mash, roasted forest mushrooms, thyme gravy,  and tender slow-cooked meat from mountain sheep. Topped with a crackled golden crust.",
      tag: "Hearty · Savory",
    },
    {
      imgSrc: hearthfireImage,
      category: "meals",
      name: "Hearthfire Herb-Roasted Pheasant",
      price: "12 silver",
      desc: "Phrasant roasted with wild rosemary, sky-sage, and crisp apple slices, served on a wooden board with charred vegetables.",
      tag: "Aromatic · Best with Emberwine",
    },
    {
      imgSrc: krakenImage,
      category: "meals",
      name: "Kraken-Ink Risotto",
      price: "11 silver",
      desc: "A surprisingly cosy dark risotto made with sea-ink, soft river herbs, and smoky shoreline cheese.",
      tag: "Unique · Pairs with Moonlit Orchard Cider",
    },
    {
      imgSrc: forestImage,
      category: "meals",
      name: "Forest Guardian's Roast",
      price: "14 silver",
      desc: "Game meat marinated in juniper, fire-pepper, and sweetroot, roasted until tender and served with caramelized turnips.",
      tag: "Savory · A favorite of hunters",
    },
    {
      imgSrc: riverImage,
      category: "meals",
      name: "Rive-Knight Trout and Ash-Lemon",
      price: "13 silver",
      desc: "Trout pan-fried in browned butter with sprigs of pinem served with ahs-lemon wedge and crispy garlic potatoes.",
      tag: "Light · Best with Moonlit Orchard Cider",
    },
    {
      imgSrc: emberwineImage,
      imgClass: "menu-item-image--emberwine",
      category: "drinks",
      name: "Emberwine Mulled Mead",
      price: "4 silver",
      desc: "Honey mead warmed with clove, star-amber, and a single emberstone at the bottom of the mug.",
      tag: "Warm · Spiced",
    },
    {
      imgSrc: moonlitOrchardImage,
      imgClass: "menu-item-image--moonlit-orchard",
      category: "drinks",
      name: "Moonlit Orchard Cider",
      price: "3 silver",
      desc: "Cloudy cider pressed from apples that only grow under starlight, served with a cinnamon stick.",
      tag: "Chilled · Fruity",
    },
  ];

  function renderMenuItems(categoryId) {
    menuGrid.innerHTML = "";

    const categoryItems = items.filter((item) => item.category === categoryId);

    categoryItems.forEach((item) => {
      const card = createElement("article", { classes: ["menu-item"] });

      const imageClasses = ["menu-item-image"];
      if (item.imgClass) imageClasses.push(item.imgClass);

      const image = createElement("img", {
        classes: imageClasses,
        imgSrc: item.imgSrc,
        attrs: {
          alt: item.name,
        },
      });

      const top = createElement("div", { classes: ["menu-item-header"] });
      const itemName = createElement("div", {
        classes: ["menu-item-name"],
        text: item.name,
      });
      const price = createElement("div", {
        classes: ["menu-item-price"],
        text: item.price,
      });

      top.appendChild(itemName);
      top.appendChild(price);

      const desc = createElement("p", {
        classes: ["menu-item-desc"],
        text: item.desc,
      });

      const tag = createElement("div", {
        classes: ["menu-item-tag"],
        text: item.tag,
      });

      card.appendChild(image);
      card.appendChild(top);
      card.appendChild(desc);
      card.appendChild(tag);

      menuGrid.appendChild(card);
    });
  }

  const menuNav = createMenuNav();

  menuNav.addEventListener("click", (e) => {
    if (!e.target.classList.contains("menu-tab")) return;

    const tabId = e.target.getAttribute("data-tab");
    setActiveMenuTab(menuNav, tabId);
    renderMenuItems(tabId);
  });

  renderMenuItems(menuTabs[0].id);

  body.appendChild(menuNav);
  body.appendChild(menuGrid);
  menuCard.appendChild(header);
  menuCard.appendChild(body);

  const sidePanel = createDrinkSuggestionPanel();

  mainPanel.appendChild(menuCard);
  mainPanel.appendChild(sidePanel);
}

function createDrinkSuggestionPanel() {
  const side = createElement("aside", { classes: ["side-panel"] });

  const pairing = createElement("section", { classes: ["card"] });
  const title = createElement("div", {
    classes: ["side-card-title"],
    text: "Innkeep's Pairings",
  });

  const text = createElement("p", {
    classes: ["side-note"],
    html:
      `<span class="candle"> 🍺 </span> <strong> Wyvernfire Stew </strong> loves Emverwine Mead.` +
      `<br><span class="candle"> 🍷 </span> <strong> Mushroom Pie </strong> sings with Moonlit Orchard Cider.` +
      `<br><span class="candle"> 🥃 </span> <strong> Dragonwing Skewers </strong> demand a shot of Blackwood Firewater.`,
  });

  pairing.appendChild(title);
  pairing.appendChild(text);
  side.appendChild(pairing);

  return side;
}
