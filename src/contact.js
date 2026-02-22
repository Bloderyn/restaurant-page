export default function createContactPage() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const title = document.createElement("h2");
  title.textContent = "Contact";

  const phone = document.createElement("p");
  phone.textContent = "Crystal ball: +12 345 678";

  const address = document.createElement("p");
  address.textContent =
    "Misty Road between Thoradhor and Brackenholme, near the old stone bridge.";

  const hours = document.createElement("p");
  hours.textContent = "Open at twilight. Closed during eclipses.";

  contact.appendChild(title);
  contact.appendChild(phone);
  contact.appendChild(address);
  contact.appendChild(hours);

  return contact;
}
