import { createElement } from "./index.js";

export default function loadAbout(mainPanel) {
  mainPanel.innerHTML = "";

  const loreCard = createElement("section", { classes: ["card"] });
  const header = createElement("div", { classes: ["card-header"] });

  const title = createElement("h1", {
    classes: ["card-title"],
    text: "A Tale Older Than the Road",
  });

  const tagline = createElement("span", {
    classes: ["card-tagline"],
    text: "Founded by dwarves, kept by elves, loved by heroes",
  });

  header.appendChild(title);
  header.appendChild(tagline);

  const body = createElement("div", { classes: ["card-body"] });

  const p1 = createElement("p", {
    classes: ["lore-paragraph"],
    html:
      `The <span class="lore-highlight">Drunken Wyvern</span> began as a lean-to nailed against a fallen watchtower, ` +
      `a place where deserters could drink in peace and pretend the war did not exist.`,
  });

  const p2 = createElement("p", {
    classes: ["lore-paragraph"],
    html:
      `As the kingdoms rose and fell, so did the tavern’s reputation. Heroes came to boast, ` +
      `villains to hide, and those who had lost everything came simply to sit by the fire and remember how to feel warm.`,
  });

  const p3 = createElement("p", {
    classes: ["lore-paragraph"],
    html:
      `They say if you look closely at the beams above the hearth, you can still see the old ` +
      `watchtower’s stone, scorched by dragonfire and carved with names of those who never made it home.`,
  });

  body.appendChild(p1);
  body.appendChild(p2);
  body.appendChild(p3);

  loreCard.appendChild(header);
  loreCard.appendChild(body);

  const sidePanel = createSidePanel();

  mainPanel.appendChild(loreCard);
  mainPanel.appendChild(sidePanel);
}

function createSidePanel() {
  const side = createElement("aside", { classes: ["side-panel"] });

  const trivia = createElement("section", { classes: ["card"] });
  const title = createElement("div", {
    classes: ["side-section-title"],
    text: "Tavern Trivia",
  });

  const text = createElement("p", {
    classes: ["side-note"],
    html:
      `• The wyvern on the sign has had its tail repainted 7 times after “incidents.”<br>` +
      `• The current innkeep claims to be only the third owner. The ghost disagrees.`,
  });

  trivia.appendChild(title);
  trivia.appendChild(text);
  side.appendChild(trivia);

  return side;
}
