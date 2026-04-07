import { createElement } from "./index.js";

export default function loadContact(mainPanel) {
  mainPanel.innerHTML = "";

  const page = createElement("div", { classes: ["page", "contact-page"] });
  const intro = createElement("section", {
    classes: ["page-heading", "panel-surface"],
  });

  intro.appendChild(
    createElement("p", {
      classes: ["section-eyebrow"],
      text: "Plan your evening",
    }),
  );
  intro.appendChild(
    createElement("h2", {
      classes: ["section-title"],
      html: 'Reserve a place in <span>the grand hall</span>',
    }),
  );
  intro.appendChild(
    createElement("p", {
      classes: ["section-copy", "page-heading-copy"],
      text: "For intimate suppers, courtly feasts, or an extravagant gathering that needs candle towers and a discreet cellar pour, send word before dusk and the house will make its preparations.",
    }),
  );

  const details = createElement("section", {
    classes: ["contact-grid"],
  });

  [
    {
      label: "Location",
      value: "High on the obsidian pass, where the watchfires begin and the weather turns theatrical.",
    },
    {
      label: "House messenger",
      value: "Address your letter to the Gilded Wyvern steward and seal it in red wax. Fast riders know the rest.",
    },
    {
      label: "Evening hours",
      value: "Doors open at dusk. Final seating at the second bell. Cellar pours continue by invitation.",
    },
    {
      label: "Private feasts",
      value: "Available for guild dinners, noble visits, and celebrations that require the western gallery.",
    },
  ].forEach((item) => {
    const card = createElement("article", {
      classes: ["contact-card", "panel-surface"],
    });
    card.appendChild(
      createElement("div", {
        classes: ["detail-card-label"],
        text: item.label,
      }),
    );
    card.appendChild(
      createElement("p", {
        classes: ["detail-card-copy"],
        text: item.value,
      }),
    );
    details.appendChild(card);
  });

  const etiquette = createElement("section", {
    classes: ["etiquette-panel", "panel-surface"],
  });
  etiquette.appendChild(
    createElement("p", {
      classes: ["section-eyebrow"],
      text: "House etiquette",
    }),
  );
  etiquette.appendChild(
    createElement("h2", {
      classes: ["section-title"],
      text: "Arrive hungry, dress well, keep your duels outside",
    }),
  );
  etiquette.appendChild(
    createElement("p", {
      classes: ["section-copy"],
      text: "Steel may be ceremonial, but it stays sheathed. Bargains with shadowed things are discouraged at the table. Above all, leave room for dessert and whatever final course the house decides to send out with the compliments of the steward.",
    }),
  );

  page.appendChild(intro);
  page.appendChild(details);
  page.appendChild(etiquette);
  mainPanel.appendChild(page);
}
