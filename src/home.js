import { createElement } from "./index.js";
import backgroundImage from "../images/background.png";
import wyvernfireStewImage from "../images/wyvernfire-stew.png";
import emberwineImage from "../images/emberwine.png";
import hearthfireImage from "../images/hearthfire.png";

export default function loadHome(mainPanel) {
  mainPanel.innerHTML = "";

  const page = createElement("div", { classes: ["page", "home-page"] });

  page.appendChild(createHeroSection());
  page.appendChild(createOriginSection());
  page.appendChild(createSignatureSection());
  page.appendChild(createClosingSection());

  mainPanel.appendChild(page);
}

function createHeroSection() {
  const section = createElement("section", { classes: ["hero-section"] });
  const content = createElement("div", { classes: ["hero-content"] });

  const eyebrow = createElement("p", {
    classes: ["section-eyebrow"],
    text: "Established 1286 in the ashen north",
  });

  const title = createElement("h2", {
    classes: ["hero-title"],
    html: 'Feast beneath the <span>gilded shadow</span>',
  });

  const copy = createElement("p", {
    classes: ["hero-copy"],
    text: "An evening house of velvet booths, ember-lit banquets, and rare pours reserved for travelers with excellent taste and questionable stories.",
  });

  const actions = createElement("div", { classes: ["hero-actions"] });
  const reserveButton = createElement("button", {
    classes: ["button", "button-primary"],
    text: "Reserve a feast",
    attrs: { type: "button", "data-tab": "contact" },
  });
  const menuButton = createElement("button", {
    classes: ["button", "button-secondary"],
    text: "View curated menu",
    attrs: { type: "button", "data-tab": "menu" },
  });

  actions.appendChild(reserveButton);
  actions.appendChild(menuButton);

  const metrics = createElement("div", { classes: ["hero-metrics"] });
  [
    { value: "12", label: "private tables" },
    { value: "7", label: "seasonal signatures" },
    { value: "1", label: "legendary cellar" },
  ].forEach((item) => {
    const metric = createElement("div", { classes: ["hero-metric"] });
    metric.appendChild(
      createElement("span", { classes: ["hero-metric-value"], text: item.value }),
    );
    metric.appendChild(
      createElement("span", { classes: ["hero-metric-label"], text: item.label }),
    );
    metrics.appendChild(metric);
  });

  content.appendChild(eyebrow);
  content.appendChild(title);
  content.appendChild(copy);
  content.appendChild(actions);
  content.appendChild(metrics);
  section.appendChild(content);

  return section;
}

function createOriginSection() {
  const section = createElement("section", { classes: ["story-section", "panel-surface"] });
  const media = createElement("div", { classes: ["story-media"] });
  const image = createElement("img", {
    classes: ["story-image"],
    imgSrc: backgroundImage,
    attrs: { alt: "The candlelit hall of The Gilded Wyvern" },
  });
  const imageCaption = createElement("p", {
    classes: ["story-caption"],
    text: "Lantern aisles, vaulted stone, and a hearth that never truly sleeps.",
  });

  media.appendChild(image);
  media.appendChild(imageCaption);

  const content = createElement("div", { classes: ["story-copy"] });
  content.appendChild(
    createElement("p", {
      classes: ["section-eyebrow"],
      text: "The house legend",
    }),
  );
  content.appendChild(
    createElement("h2", {
      classes: ["section-title"],
      html: 'A legacy forged in <span>dragonfire</span>',
    }),
  );
  content.appendChild(
    createElement("p", {
      classes: ["section-copy"],
      text: "The Gilded Wyvern began as a refuge for diplomats and dragon riders crossing the frostbound pass. What started as a hall for treaty suppers became the place nobles, mercenaries, and midnight scholars seek when they want cuisine with ceremony.",
    }),
  );
  content.appendChild(
    createElement("p", {
      classes: ["section-copy"],
      text: "Each service is staged like a courtly performance: silver domes lifted in unison, smoke curling from crystal goblets, and the slow glow of embers reflected across old stone and polished glass.",
    }),
  );

  const detailCard = createElement("div", { classes: ["detail-card"] });
  detailCard.appendChild(
    createElement("div", {
      classes: ["detail-card-label"],
      text: "Tonight's note",
    }),
  );
  detailCard.appendChild(
    createElement("p", {
      classes: ["detail-card-copy"],
      text: "The kitchen is finishing Drake-Wing Ribs with black cherry lacquer, and the cellar has opened a limited cask of emberwine for guests who arrive before moonrise.",
    }),
  );

  content.appendChild(detailCard);
  section.appendChild(media);
  section.appendChild(content);

  return section;
}

function createSignatureSection() {
  const section = createElement("section", {
    classes: ["signature-section", "panel-surface"],
  });

  const heading = createElement("div", { classes: ["section-heading"] });
  heading.appendChild(
    createElement("p", {
      classes: ["section-eyebrow"],
      text: "Limited service",
    }),
  );
  heading.appendChild(
    createElement("h2", {
      classes: ["section-title"],
      text: "Nightly signatures",
    }),
  );
  heading.appendChild(
    createElement("p", {
      classes: ["section-aside"],
      text: "Composed for bold appetites, plated with just enough theater.",
    }),
  );

  const grid = createElement("div", { classes: ["feature-grid"] });
  [
    {
      image: wyvernfireStewImage,
      title: "Drake-Wing Ribs",
      price: "42 g",
      description: "Triple-smoked ribs glazed in black pepper syrup and finished over glowing alder embers.",
      accent: "Extreme heat level",
    },
    {
      image: emberwineImage,
      title: "Voidglass Elixir",
      price: "28 g",
      description: "Smoked plum cordial, dark herbs, and a shimmer of violet mist poured tableside.",
      accent: "Cellar reserve pour",
    },
    {
      image: hearthfireImage,
      title: "Warrior's Supper",
      price: "56 g",
      description: "Herb-roasted pheasant, cinder potatoes, and rosemary jus served beneath a silver cloche.",
      accent: "Chef's hall favorite",
    },
  ].forEach((item) => {
    grid.appendChild(createFeatureCard(item));
  });

  section.appendChild(heading);
  section.appendChild(grid);

  return section;
}

function createFeatureCard(item) {
  const card = createElement("article", { classes: ["feature-card"] });
  const image = createElement("img", {
    classes: ["feature-card-image"],
    imgSrc: item.image,
    attrs: { alt: item.title },
  });
  const top = createElement("div", { classes: ["feature-card-top"] });

  top.appendChild(
    createElement("h3", { classes: ["feature-card-title"], text: item.title }),
  );
  top.appendChild(
    createElement("span", { classes: ["feature-card-price"], text: item.price }),
  );

  card.appendChild(image);
  card.appendChild(top);
  card.appendChild(
    createElement("p", {
      classes: ["feature-card-copy"],
      text: item.description,
    }),
  );
  card.appendChild(
    createElement("div", {
      classes: ["feature-card-accent"],
      text: item.accent,
    }),
  );

  return card;
}

function createClosingSection() {
  const section = createElement("section", {
    classes: ["closing-banner", "panel-surface"],
  });
  const textWrap = createElement("div", { classes: ["closing-copy"] });

  textWrap.appendChild(
    createElement("p", {
      classes: ["section-eyebrow"],
      text: "Private dining",
    }),
  );
  textWrap.appendChild(
    createElement("h2", {
      classes: ["section-title"],
      html: 'Your table awaits in <span>the lantern hall</span>',
    }),
  );
  textWrap.appendChild(
    createElement("p", {
      classes: ["section-copy"],
      text: "Reserve the western gallery for coronation suppers, guild dinners, and evenings that deserve velvet drapery, candle towers, and a final pour after the musicians have gone home.",
    }),
  );

  const button = createElement("button", {
    classes: ["button", "button-primary"],
    text: "Arrange a private feast",
    attrs: { type: "button", "data-tab": "contact" },
  });

  section.appendChild(textWrap);
  section.appendChild(button);

  return section;
}
