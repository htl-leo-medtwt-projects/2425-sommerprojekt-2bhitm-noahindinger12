//-----------------VARIABLEN--------------------------------------------------------------

let backbutton = document.getElementById("back");
let spracheMenueButton = document.getElementById("sprache");
let darkmodeMenueButton = document.getElementById("darkmode");

//-----------------Frames---------------------------------------------

let settings = document.getElementById("settingspopup");
let settingsSprache = document.getElementById("settingsPopupSprache");
let settingsDarkmode = document.getElementById("settingsPopupDarkmode");
let login = document.getElementById("loginpopup");

//-----------------OpenAndCloseOverlays---------------------------------------------------------

function OpenOverlays(id) {
  switch (id) {
    case "settings":
      settings.style.display = "block";
      settingsDarkmode.style.display = "none"
      break;
    case "login":
      login.style.display = "block";
      break;
  }
}

function CloseOverlays(id) {
  switch (id) {
    case "settings":
      settings.style.display = "none";
      break;
    case "login":
      login.style.display = "none";
      break;
  }
}

//----------------IsActiveButtonAndSwitchSettings--------------------------------------------------------------


function isActive(id) {
  switch (id) {
    case "sprache":
      spracheMenueButton.style.backgroundColor = "var(--blueTextColor)"
      darkmodeMenueButton.style.backgroundColor = "var(--grayBackColor)"
      //settingsDarkmode.style.display = "none"
      //settingsSprache.style.display = "block"
      break;
    case "darkmode":
      darkmodeMenueButton.style.backgroundColor = "var(--blueTextColor)"
      spracheMenueButton.style.backgroundColor = "var(--grayBackColor)"
      //settingsSprache.style.display = "none";
      //settingsDarkmode.style.display = "block"
      break;
  }
}



