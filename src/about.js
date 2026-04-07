import { createElement } from "./index.js";
import backgroundImage from "../images/background.png";

export default function loadAbout(mainPanel) {
  mainPanel.innerHTML = "";

  const page = createElement("div", { classes: ["page", "about-page"] });
  const intro = createElement("section", {
    classes: ["page-heading", "panel-surface"],
  });

  intro.appendChild(
    createElement("p", {
      classes: ["section-eyebrow"],
      text: "The house chronicle",
    }),
  );
  intro.appendChild(
    createElement("h2", {
      classes: ["section-title"],
      html: 'An old hall with a <span>long memory</span>',
    }),
  );
  intro.appendChild(
    createElement("p", {
      classes: ["section-copy", "page-heading-copy"],
      text: "Before it was a supper club, The Gilded Wyvern was a treaty house perched along the obsidian pass. Riders arrived with ash on their cloaks, magistrates with seals in hand, and every one of them eventually found their way to the same fire.",
    }),
  );

  const heritage = createElement("section", {
    classes: ["heritage-section", "panel-surface"],
  });
  const heritageMedia = createElement("div", { classes: ["heritage-media"] });
  heritageMedia.appendChild(
    createElement("img", {
      classes: ["heritage-image"],
      imgSrc: backgroundImage,
      attrs: { alt: "The vaulted dining hall at The Gilded Wyvern" },
    }),
  );
  heritageMedia.appendChild(
    createElement("p", {
      classes: ["story-caption"],
      text: "The original stone arches still frame the western gallery.",
    }),
  );

  const heritageCopy = createElement("div", { classes: ["heritage-copy"] });
  [
    "The first steward forged peace here by seating rival courts at one long blackwood table and refusing to serve either side until both had agreed to stay through dessert.",
    "Centuries later, the ritual remains. Service begins with candle towers lit in sequence, house music tuned low, and a welcoming toast poured from the oldest cask in the cellar.",
    "Some patrons come for the pheasant, some for the emberwine, and some because they need one room in the kingdom where elegance still feels like a spell being cast in real time.",
  ].forEach((paragraph) => {
    heritageCopy.appendChild(
      createElement("p", {
        classes: ["section-copy"],
        text: paragraph,
      }),
    );
  });

  heritage.appendChild(heritageMedia);
  heritage.appendChild(heritageCopy);

  const pillars = createElement("section", {
    classes: ["pillars-section", "panel-surface"],
  });
  pillars.appendChild(
    createElement("p", {
      classes: ["section-eyebrow"],
      text: "What endures",
    }),
  );
  pillars.appendChild(
    createElement("h2", {
      classes: ["section-title"],
      text: "Three traditions kept without compromise",
    }),
  );

  const pillarGrid = createElement("div", { classes: ["pillar-grid"] });
  [
    {
      title: "Ceremonial service",
      text: "Every course is revealed tableside, paced for conversation rather than haste.",
    },
    {
      title: "A living cellar",
      text: "The vault beneath the hall keeps rare casks, smoked cordials, and one bottle never listed aloud.",
    },
    {
      title: "Rooms for legend",
      text: "Travelers, nobility, and discreet conspirators all leave feeling they briefly belonged to something grander.",
    },
  ].forEach((item) => {
    const card = createElement("article", { classes: ["pillar-card"] });
    card.appendChild(
      createElement("h3", { classes: ["pillar-title"], text: item.title }),
    );
    card.appendChild(
      createElement("p", { classes: ["pillar-copy"], text: item.text }),
    );
    pillarGrid.appendChild(card);
  });

  pillars.appendChild(pillarGrid);
  page.appendChild(intro);
  page.appendChild(heritage);
  page.appendChild(pillars);

  mainPanel.appendChild(page);
}
