let frageNummer = 0;
let antworten = [];

let apoe = 0;
let spo = 0;
let gruen = 0;
let oevp = 0;
let fpoe = 0;
let neos = 0;

let frageText = document.getElementById("question");
let erklaerung = document.getElementById("explanation");
let antwortBereich = document.getElementById("answers");
let fortschritt = document.getElementById("progress");
let weiterButton = document.getElementById("nextBtn");

// Fortschrittsanzeige aufbauen (Kästchen 1-15)
function zeigeFortschritt() {
  fortschritt.innerHTML = "";
  for (let i = 0; i < fragen.length; i++) {
    let feld = document.createElement("div");
    feld.className = "step";
    if (i === frageNummer) {
      feld.classList.add("active");
    }
    feld.textContent = i + 1;
    fortschritt.appendChild(feld);
  }
}

// Frage und Antwortmöglichkeiten anzeigen
function zeigeFrage() {
  let frage = fragen[frageNummer];
  frageText.textContent = frage.Frage;
  erklaerung.textContent = frage.Erklaerung;
  erklaerung.classList.add("hidden");

  antwortBereich.innerHTML = "";

  for (let partei in frage.Antworten) {
    let antwort = frage.Antworten[partei];
    let feld = document.createElement("div");
    feld.className = "answer";
    feld.textContent = antwort + " (" + partei + ")";

    if (antworten[frageNummer] === partei) {
      feld.classList.add("selected");
    }

    feld.onclick = function () {
      let vorher = antworten[frageNummer];
      antworten[frageNummer] = partei;

      if (vorher !== partei) {
        if (vorher) ziehePunktAb(vorher);
        gebePunktDazu(partei);
      }

      zeigeFrage();
    };

    antwortBereich.appendChild(feld);
  }
}

// Erklärung ein-/ausblenden
function toggleExplanation() {
  erklaerung.classList.toggle("hidden");
}

// Punkte hinzufügen
function gebePunktDazu(partei) {
  let p = partei.toLowerCase();
  if (p === "apö") apoe++;
  if (p === "spö") spo++;
  if (p === "grüne") gruen++;
  if (p === "övp") oevp++;
  if (p === "fpö") fpoe++;
  if (p === "neos") neos++;
}

// Punkte abziehen (bei Antwortänderung)
function ziehePunktAb(partei) {
  let p = partei.toLowerCase();
  if (p === "apö") apoe--;
  if (p === "spö") spo--;
  if (p === "grüne") gruen--;
  if (p === "övp") oevp--;
  if (p === "fpö") fpoe--;
  if (p === "neos") neos--;
}

// Weiter-Button Logik
weiterButton.onclick = function () {
  if (frageNummer < fragen.length - 1) {
    frageNummer++;
    zeigeFortschritt();
    zeigeFrage();
  } else {
    zeigeErgebnisPopup();
  }
};

// Ergebnis-Popup anzeigen
function zeigeErgebnisPopup() {
  let popup = document.getElementById("ergebnisPopup");
  popup.classList.remove("hidden");
  zeichneDiagramm();
}

// Ergebnis-Popup schließen
function schließePopup() {
  let popup = document.getElementById("ergebnisPopup");
  popup.classList.add("hidden");
}

// Google Diagramm
function zeichneDiagramm() {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(function () {
      let daten = google.visualization.arrayToDataTable([
        ['Partei', 'Punkte'],
        ['APÖ', apoe],
        ['SPÖ', spo],
        ['Grüne', gruen],
        ['ÖVP', oevp],
        ['FPÖ', fpoe],
        ['NEOS', neos]
      ]);
  
      let optionen = {
        title: 'Prozentübersicht',
        is3D: true,
        colors: [
          '#f39200', // APÖ = Orange
          '#d71c29', // SPÖ = Rot
          '#81c784', // Grüne = Grün
          '#191919', // ÖVP = Schwarz
          '#63aaff', // FPÖ = Blau
          '#ff00cc'  // NEOS = Pink
        ],
        titleTextStyle: {
          fontSize: 20
        }
      };
  
      let diagramm = new google.visualization.PieChart(document.getElementById('piechart_3d'));
      diagramm.draw(daten, optionen);
    });
  }
  

// Start
zeigeFortschritt();
zeigeFrage();
