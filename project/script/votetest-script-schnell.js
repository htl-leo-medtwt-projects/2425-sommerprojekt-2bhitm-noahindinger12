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

// 5 eindeutige Zufallszahlen als Indexe für Fragen
function generiereZufallsFragen(originalFragen, anzahl) {
  const indeces = new Set();
  while (indeces.size < anzahl) {
    const zufallsIndex = Math.floor(Math.random() * originalFragen.length);
    indeces.add(zufallsIndex);
  }
  return Array.from(indeces).map(i => originalFragen[i]);
}

const ausgewaehlteFragen = generiereZufallsFragen(fragen, 5);

// Fortschrittsanzeige (5 Schritte)
function zeigeFortschritt() {
  fortschritt.innerHTML = "";
  for (let i = 0; i < ausgewaehlteFragen.length; i++) {
    let feld = document.createElement("div");
    feld.className = "step";
    if (i === frageNummer) feld.classList.add("active");
    feld.textContent = i + 1;
    fortschritt.appendChild(feld);
  }
}

// Frage anzeigen
function zeigeFrage() {
  let frage = ausgewaehlteFragen[frageNummer];
  frageText.textContent = frage.Frage;
  erklaerung.textContent = frage.Erklaerung;
  erklaerung.classList.add("hidden");

  antwortBereich.innerHTML = "";

  for (let partei in frage.Antworten) {
    let antwort = frage.Antworten[partei];
    let feld = document.createElement("div");
    feld.className = "answer";
    feld.textContent = antwort;

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

function toggleExplanation() {
  erklaerung.classList.toggle("hidden");
}

function gebePunktDazu(partei) {
  let p = partei.toLowerCase();
  if (p === "apö") apoe++;
  if (p === "spö") spo++;
  if (p === "grüne") gruen++;
  if (p === "övp") oevp++;
  if (p === "fpö") fpoe++;
  if (p === "neos") neos++;
}

function ziehePunktAb(partei) {
  let p = partei.toLowerCase();
  if (p === "apö") apoe--;
  if (p === "spö") spo--;
  if (p === "grüne") gruen--;
  if (p === "övp") oevp--;
  if (p === "fpö") fpoe--;
  if (p === "neos") neos--;
}

weiterButton.onclick = function () {
  if (frageNummer < ausgewaehlteFragen.length - 1) {
    frageNummer++;
    zeigeFortschritt();
    zeigeFrage();
  } else {
    zeigeErgebnisPopup();
  }
};

function zeigeErgebnisPopup() {
  let popup = document.getElementById("ergebnisPopup");
  popup.classList.remove("hidden");
  zeichneDiagramm();
}

function schließePopup() {
  let popup = document.getElementById("ergebnisPopup");
  popup.classList.add("hidden");
}

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
