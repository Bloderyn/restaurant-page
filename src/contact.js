import { createElement } from "./index.js";

export default function loadContact(mainPanel) {
  mainPanel.innerHTML = "";

  const contactCard = createElement("section", { classes: ["card"] });
  const header = createElement("div", { classes: ["card-header"] });

  const title = createElement("h2", {
    classes: ["card-title"],
    text: "Find the Tavern",
  });

  const tagline = createElement("span", {
    classes: ["card-tagline"],
    text: "If it wants to be found",
  });

  header.appendChild(title);
  header.appendChild(tagline);

  const body = createElement("div", { classes: ["card-body"] });

  const intro = createElement("p", {
    text: "The Drunken Wyvern does not appear on ordinary maps. Still, those who need it most always seem to stumble upon its crooked door.",
  });

  const list = createElement("ul", { classes: ["contact-list"] });

  const entries = [
    {
      label: "Location",
      text: "Last inn on the Old North Road, just before the trees start whispering back.",
    },
    {
      label: "Messengers",
      text: "Tie your letter to a black-feathered raven and whisper “One more round.”",
    },
    {
      label: "Opening Hours",
      text: "From the first honest yawn of dusk to the moment the sun remembers to rise.",
    },
    {
      label: "House Rule",
      text: "No blades on the table, no blood on the floor, and no bargains with things that don’t cast a shadow.",
    },
  ];

  entries.forEach((entry) => {
    const li = createElement("li");
    li.innerHTML = `<span class="contact-label">${entry.label}:</span> ${entry.text}`;
    list.appendChild(li);
  });

  body.appendChild(intro);
  body.appendChild(list);

  contactCard.appendChild(header);
  contactCard.appendChild(body);

  const sidePanel = createSidePanel();

  mainPanel.appendChild(contactCard);
  mainPanel.appendChild(sidePanel);
}

function createSidePanel() {
  const side = createElement("aside", { classes: ["side-panel"] });

  const warning = createElement("section", { classes: ["card"] });
  const title = createElement("div", {
    classes: ["side-section-title"],
    text: "A Gentle Warning",
  });

  const text = createElement("p", {
    classes: ["side-note"],
    html:
      `Not every door you enter from the Wyvern leads back to where you came from. <br>` +
      `If the hallway seems longer than you remember, go back to the fire and finish your drink.`,
  });

  warning.appendChild(title);
  warning.appendChild(text);
  side.appendChild(warning);

  return side;
}
