import { createElement } from "./index.js";

export default function loadHome(mainPanel) {
  mainPanel.innerHTML = "";

  const mainCard = createElement("section", { classes: ["card"] });
  const header = createElement("div", { classes: ["card-header"] });

  const title = createElement("h1", {
    classes: ["card-title"],
    text: "Welcome, Wanderer",
  });

  const tagline = createElement("span", {
    classes: ["card-tagline"],
    text: "Since the Age of Dragons",
  });

  header.appendChild(title);
  header.appendChild(tagline);

  const body = createElement("div", { classes: ["card-body"] });
  const heroText = createElement("p", {
    classes: ["hero-text"],
    html:
      `The <span class="hero-highlight">Drunken Wyvern</span> waits at the edge of the old forest, ` +
      `Its crooked sign swaying in the wind, its windows glowing with a warm, golden light. ` +
      `Inside, tankards clash, dice roll across scarred tables, and a bard tunes a lute older than the kingdom itself. `,
  });

  const heroList = createElement("ul", { classes: ["hero-list"] });
  const items = [
    "Spices stews simmering in iron cauldrons over crackling hearths.",
    "Mulled mead and emberwine served in heavy, chipped tankards.",
    "Quiet corners where shady deals are struck and secrets are whispered.",
    "A room always ready for the weary, the lost, and the dangerously curious.",
  ];

  items.forEach((item) => {
    const li = createElement("li", {
      html: `<span class="hero-bullet">◆</span> ${item}`,
    });
    heroList.appendChild(li);
  });

  body.appendChild(heroText);
  body.appendChild(heroList);

  mainCard.appendChild(header);
  mainCard.appendChild(body);

  const sidePanel = createSidePanel();

  mainPanel.appendChild(mainCard);
  mainPanel.appendChild(sidePanel);
}

function createSidePanel() {
  const side = createElement("aside", {
    classes: ["side-panel"],
  });

  const noticeCard = createElement("section", { classes: ["card"] });
  const noticeTitle = createElement("div", {
    classes: ["side-section-title"],
    text: "Tonight's Atmosphere",
  });

  const noticeBody = createElement("p", {
    classes: ["side-note"],
    html:
      `<span class="candle">🕯️</span> The hearth is roaring, the rain drums against the shutters, ` +
      `and the bard is three verses deep into a ballad about a dragon who drank the moon.`,
  });

  noticeCard.appendChild(noticeTitle);
  noticeCard.appendChild(noticeBody);

  const hookCard = createElement("section", { classes: ["card"] });
  const hookTitle = createElement("div", {
    classes: ["side-section-title"],
    text: "Rumours by the Fire",
  });

  const hookBody = createElement("p", {
    classes: ["side-note"],
    html:
      `They say if you linger till closing, the innkeep will show you the <span class="hero-highlight">door that shouldn't exist</span>` +
      `the one that opens to someplace that is not on any map.`,
  });

  hookCard.appendChild(hookTitle);
  hookCard.appendChild(hookBody);

  side.appendChild(noticeCard);
  side.appendChild(hookCard);

  return side;
}
