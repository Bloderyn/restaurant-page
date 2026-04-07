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

  const page = createElement("div", { classes: ["page", "menu-page"] });
  const heading = createElement("section", {
    classes: ["page-heading", "panel-surface"],
  });

  heading.appendChild(
    createElement("p", {
      classes: ["section-eyebrow"],
      text: "Chef's selection",
    }),
  );
  heading.appendChild(
    createElement("h2", {
      classes: ["section-title"],
      html: 'An alchemist\'s menu for <span>moonlit company</span>',
    }),
  );
  heading.appendChild(
    createElement("p", {
      classes: ["section-copy", "page-heading-copy"],
      text: "From plated game and blackened risottos to smoked orchard pours, each course is styled for a long table, low conversation, and a final dramatic flourish from the kitchen.",
    }),
  );

  const menuGrid = createElement("div", { classes: ["menu-grid"] });

  const menuTabs = [
    { id: "meals", label: "Grand suppers" },
    { id: "drinks", label: "Elixirs" },
    { id: "desserts", label: "Sweet endings" },
  ];

  function createMenuNav() {
    const itemsNav = createElement("nav", {
      classes: ["menu-nav"],
      attrs: { "aria-label": "Menu categories" },
    });

    menuTabs.forEach((tab, index) => {
      const btn = createElement("button", {
        classes: ["menu-tab"],
        text: tab.label,
        attrs: { "data-tab": tab.id, type: "button" },
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
      price: "26 g",
      desc: "Slow-braised venison, ember roots, and a dark stock reduced until it clings to the spoon.",
      tag: "Hall signature",
    },
    {
      imgSrc: blackwaldMushPieImage,
      category: "meals",
      name: "Blackwald Mushroom Pie",
      price: "22 g",
      desc: "Buttery crust layered with woodland mushrooms, caramelized shallots, and midnight herbs.",
      tag: "Vegetarian favorite",
    },
    {
      imgSrc: charredDragonImage,
      category: "meals",
      name: "Charred Dragonwing Skewers",
      price: "31 g",
      desc: "Fire-glazed skewers lacquered with black pepper syrup and served over smoking cedar chips.",
      tag: "For brave appetites",
    },

    {
      imgSrc: emberImage,
      category: "meals",
      name: "Ember-Root Harvest Soup",
      price: "19 g",
      desc: "A velvet soup of smoked barley, ember carrots, and moon onions finished with cultured cream.",
      tag: "Silken and warming",
    },
    {
      imgSrc: travelerBreadImage,
      category: "meals",
      name: "Traveler's Bread and Ash Butter",
      price: "12 g",
      desc: "House black loaf served warm with smoked salt butter and candle honey.",
      tag: "Shared table staple",
    },
    {
      imgSrc: wolfbornImage,
      category: "meals",
      name: "Wolfborn Shepherd's Pie",
      price: "24 g",
      desc: "Mountain lamb, thyme gravy, and root mash baked beneath a lacquered golden crust.",
      tag: "Deeply savory",
    },
    {
      imgSrc: hearthfireImage,
      category: "meals",
      name: "Hearthfire Herb-Roasted Pheasant",
      price: "34 g",
      desc: "Pheasant roasted with rosemary, sky sage, and orchard apples, finished with charred vegetables.",
      tag: "Aromatic centerpiece",
    },
    {
      imgSrc: krakenImage,
      category: "meals",
      name: "Kraken-Ink Risotto",
      price: "29 g",
      desc: "Dark risotto folded with sea ink, river herbs, and smoked shoreline cheese.",
      tag: "Unexpectedly elegant",
    },
    {
      imgSrc: forestImage,
      category: "meals",
      name: "Forest Guardian's Roast",
      price: "38 g",
      desc: "Juniper-marinated game roast with caramelized turnips and dark pan glaze.",
      tag: "Long-table classic",
    },
    {
      imgSrc: riverImage,
      category: "meals",
      name: "River-Knight Trout and Ash Lemon",
      price: "27 g",
      desc: "Brown-butter trout with ash lemon, crisp potatoes, and a scatter of woodland dill.",
      tag: "Bright and delicate",
    },
    {
      imgSrc: emberwineImage,
      imgClass: "menu-item-image--emberwine",
      category: "drinks",
      name: "Emberwine Mulled Mead",
      price: "14 g",
      desc: "Honey mead warmed with clove, star amber, and a softly glowing emberstone.",
      tag: "Warm cellar pour",
    },
    {
      imgSrc: moonlitOrchardImage,
      imgClass: "menu-item-image--moonlit-orchard",
      category: "drinks",
      name: "Moonlit Orchard Cider",
      price: "12 g",
      desc: "Clouded cider pressed from midnight apples and perfumed with winter bark.",
      tag: "Bright and chilled",
    },
    {
      imgSrc: emberImage,
      category: "drinks",
      name: "Ashen Orchard Tonic",
      price: "13 g",
      desc: "Roasted pear, tonic herbs, and silver citrus served over cracked ice.",
      tag: "House aperitif",
    },
    {
      imgSrc: krakenImage,
      category: "drinks",
      name: "Deepwater Black",
      price: "16 g",
      desc: "An ink-dark cordial with sea salt, bitter orange, and a cold mineral finish.",
      tag: "For slower sipping",
    },
    {
      imgSrc: travelerBreadImage,
      category: "desserts",
      name: "Candle Honey Tart",
      price: "15 g",
      desc: "Burnished pastry shell filled with warm honey custard and smoked cream.",
      tag: "Soft finish",
    },
    {
      imgSrc: blackwaldMushPieImage,
      category: "desserts",
      name: "Blackwood Truffle Slice",
      price: "17 g",
      desc: "Dark chocolate truffle layered with cherry glaze and midnight cocoa crumb.",
      tag: "Rich and decadent",
    },
    {
      imgSrc: moonlitOrchardImage,
      category: "desserts",
      name: "Starlight Orchard Cream",
      price: "14 g",
      desc: "Whipped cream set with spiced apples, crystal sugar, and a splash of cider syrup.",
      tag: "Light closing course",
    },
  ];

  function renderMenuItems(categoryId) {
    menuGrid.innerHTML = "";

    const categoryItems = items.filter((item) => item.category === categoryId);

    categoryItems.forEach((item) => {
      const card = createElement("article", { classes: ["menu-item", "panel-surface"] });

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

      const ornament = createElement("div", {
        classes: ["menu-item-ornament"],
        text: "Hall recommendation",
      });

      card.appendChild(image);
      card.appendChild(ornament);
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

  const pairing = createElement("section", {
    classes: ["pairing-panel", "panel-surface"],
  });
  pairing.appendChild(
    createElement("div", {
      classes: ["detail-card-label"],
      text: "Sommelier's pairing",
    }),
  );
  pairing.appendChild(
    createElement("p", {
      classes: ["detail-card-copy"],
      html:
        '<strong>Wyvernfire Stew</strong> is best matched with Emberwine Mead.<br><strong>Blackwald Mushroom Pie</strong> softens beautifully beside Moonlit Orchard Cider.<br><strong>Dragonwing Skewers</strong> deserve the bitter finish of Deepwater Black.',
    }),
  );

  page.appendChild(heading);
  page.appendChild(menuNav);
  page.appendChild(menuGrid);
  page.appendChild(pairing);
  mainPanel.appendChild(page);
}
