import { createElement } from "./index.js";
import wyvernfireStewImage from "../images/wyvernfire-stew.png";
import blackwaldMushPieImage from "../images/blackwald-mush-pie.png";
import charredDragonImage from "../images/charred-dragon.png";
import emberwineImage from "../images/emberwine.png";
import moonlitOrchardImage from "../images/moonlit-orchard.png";
import travelerBreadImage from "../images/traveler-bread.png";

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

  const items = [
    {
      imgSrc: wyvernfireStewImage,
      name: "Wyvernfire Stew",
      price: "8 silver",
      desc: "Slow-cooked stag, root vegetables, and ember-spice broth thick enough to stand a spoon in.",
      tag: "House specialty · Mildly cursed",
    },
    {
      imgSrc: blackwaldMushPieImage,
      name: "Blackwald Mushroom Pie",
      price: "6 silver",
      desc: "Flaky crust filled with forest mushrooms, caramelized onions, and a suspicious hint of moon-herb.",
      tag: "Vegetarian · May cause visions",
    },
    {
      imgSrc: charredDragonImage,
      name: "Charred Dragonwing Skewers",
      price: "10 silver",
      desc: "Spicy skewers slathered in hellpepper glaze. Definitely not actual dragon. Probably.",
      tag: "Spicy · Recommended with mead",
    },
    {
      imgSrc: emberwineImage,
      name: "Emberwine Mulled Mead",
      price: "4 silver",
      desc: "Honey mead warmed with clove, star-amber, and a single emberstone at the bottom of the mug.",
      tag: "Best served near the hearth",
    },
    {
      imgSrc: moonlitOrchardImage,
      name: "Moonlit Orchard Cider",
      price: "3 silver",
      desc: "Cloudy cider pressed from apples that only grow under starlight, served with a cinnamon stick.",
      tag: "Light · Refreshing",
    },
    {
      imgSrc: travelerBreadImage,
      name: "Traveler's Bread and Ashen Butter",
      price: "2 silver",
      desc: "Dense black bread with smoked salt butter whipped to airy perfection.",
      tag: "Good with any stew",
    },
  ];

  items.forEach((item) => {
    const card = createElement("article", { classes: ["menu-item"] });

    const image = createElement("img", {
      classes: ["menu-item-image"],
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
