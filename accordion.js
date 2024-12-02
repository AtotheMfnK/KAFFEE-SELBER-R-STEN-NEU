
let titles = document.querySelectorAll("#accordion > h4");

function toggleContent() {
  // Zuerst alle Abschnitte schließen, außer dem, der gerade angeklickt wurde.
  for (let title of titles) {
    let section = title.nextElementSibling;  // Hier bekommen wir die Section, die zum h4 gehört.
    if (section !== this.nextElementSibling) {
      section.style.display = "none";  // Alle anderen Abschnitte ausblenden.
    }
  }

  // Jetzt den aktuellen Abschnitt ein- oder ausblenden
  const displayProperty = window.getComputedStyle(this.nextElementSibling).getPropertyValue("display");
  if (displayProperty === "none") {
    this.nextElementSibling.style.display = "flex";  // Abschnitt einblenden, wenn er versteckt war.
  } else {
    this.nextElementSibling.style.display = "none";  // Abschnitt ausblenden, wenn er sichtbar war.
  }
}

// Füge für jedes h4 einen Klick-Listener hinzu
for (let title of titles) {
  title.addEventListener("click", toggleContent);
}
