//-----------------Sprachen Strings--------------------------------------------------------------

let englishString = `
<img src="img/logos/VoteXpert_gray.png" alt="VoteXpertLogo" id="votexpertlogo">
<img src="img/logos/parlamentlogo.png" alt="ParliamentLogo" id="parlamentlogo">

<div id="maintext">
    <h1>VoteXpert</h1>
    <h2>Your election assistant</h2>
    <p>Find out which party suits you best and read personalized news! <br>
        Answer a few questions and receive a tailored recommendation.
    </p>
    <div id="testbutton">
        <p>Start test now</p>
        <img src="img/assets/icons/fast-forward.png" alt="arrow" id="testbuttonpfeil">
    </div>
</div>

<nav>
    <div id="home">
        <img src="img/assets/icons/home.png" alt="home icon" id="navbuttonhomeicon">
        <p>Home</p>
    </div>
    <div id="login">
        <img src="img//assets/icons/user.png" alt="user icon" id="navbuttonloginicon">
        <p>Log in</p>
    </div>
    <div id="game">
        <img src="img/assets/icons/games.png" alt="game icon" id="navbuttongameicon">
        <p>Game</p>
    </div>
    <div id="settings" onclick="OpenOverlays('settings')">
        <img src="img/assets/icons/setting.png" alt="settings icon" id="navbuttonsettingsicon">
        <p>Settings</p>
    </div>
</nav>

<div id="settingspopup">
    <div id="settingsPopupSprache">
        <div id="innerrectangle">
            <div id="back" onclick="CloseOverlays('settings')">
                <img src="img/assets/icons/back.png" alt="" id="backbutton">
                <p id="einstellungen">Settings</p>
            </div>
            <div id="changeSprache">
                <div class="changesettingbuttons">
                    <div class="darkmode" onclick="isActive('darkmode')">
                        <p>Dark mode</p>
                    </div>
                    <div class="sprache" onclick="isActive('sprache')">
                        <p>Language</p>
                    </div>
                </div>
                <div id="sprachen">
                    <img src="img/assets/austria.png" id="deutsch" draggable="false" onclick="selectSettings('deutsch')">
                    <img src="img/assets/united-states.png" id="englisch" draggable="false" onclick="selectSettings('englisch')">
                    <img src="img/assets/spain.png" id="spanisch" draggable="false" onclick="selectSettings('spanisch')">
                </div>
                <div class="speichernbuttons">
                    <div class="savebutton" onclick="saveSettings()">
                        <p>Save</p>
                    </div>
                    <div class="standardButton">
                        <p>Default</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="settingsPopupDarkmode">
        <div id="innerrectangleDarkmode">
            <div id="backDarkmode" onclick="CloseOverlays('settings')">
                <img src="img/assets/icons/back.png" alt="" id="backbuttonDarkmode">
                <p id="einstellungenDarkmode">Settings</p>
            </div>
            <div id="changeMode">
                <div class="changesettingbuttons">
                    <div class="darkmode" onclick="isActive('darkmode')">
                        <p>Dark mode</p>
                    </div>
                    <div class="sprache" onclick="isActive('sprache')">
                        <p>Language</p>
                    </div>
                </div>
                <div id="darkLightMode">
                    <img src="img/assets/AutoMode.png" draggable="false" id="autoMode" onclick="selectSettings('autoMode')">
                    <img src="img/assets/LightMode.png" draggable="false" id="lightMode" onclick="selectSettings('lightMode')">
                    <img src="img/assets/DarkMode.png" draggable="false" id="darkMode" onclick="selectSettings('darkMode')">
                </div>
                <div class="speichernbuttons">
                    <div class="savebutton" onclick="saveSettings()">
                        <p>Save</p>
                    </div>
                    <div class="standardButton">
                        <p>Default</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

let spanishString = `
<img src="img/logos/VoteXpert_gray.png" alt="VoteXpertLogo" id="votexpertlogo">
<img src="img/logos/parlamentlogo.png" alt="LogoParlamento" id="parlamentlogo">

<div id="maintext">
    <h1>VoteXpert</h1>
    <h2>Tu asistente electoral inteligente</h2>
    <p>¡Descubre qué partido se adapta mejor a ti y lee noticias personalizadas! <br>
        Responde algunas preguntas y recibe una recomendación personalizada.
    </p>
    <div id="testbutton">
        <p>Iniciar prueba ahora</p>
        <img src="img/assets/icons/fast-forward.png" alt="flecha" id="testbuttonpfeil">
    </div>
</div>

<nav>
    <div id="home">
        <img src="img/assets/icons/home.png" alt="icono casa" id="navbuttonhomeicon">
        <p>Inicio</p>
    </div>
    <div id="login">
        <img src="img//assets/icons/user.png" alt="icono usuario" id="navbuttonloginicon">
        <p>Iniciar sesión</p>
    </div>
    <div id="game">
        <img src="img/assets/icons/games.png" alt="icono juego" id="navbuttongameicon">
        <p>Juego</p>
    </div>
    <div id="settings" onclick="OpenOverlays('settings')">
        <img src="img/assets/icons/setting.png" alt="icono ajustes" id="navbuttonsettingsicon">
        <p>Ajustes</p>
    </div>
</nav>

<div id="settingspopup">
    <div id="settingsPopupSprache">
        <div id="innerrectangle">
            <div id="back" onclick="CloseOverlays('settings')">
                <img src="img/assets/icons/back.png" alt="" id="backbutton">
                <p id="einstellungen">Ajustes</p>
            </div>
            <div id="changeSprache">
                <div class="changesettingbuttons">
                    <div class="darkmode" onclick="isActive('darkmode')">
                        <p>Modo oscuro</p>
                    </div>
                    <div class="sprache" onclick="isActive('sprache')">
                        <p>Idioma</p>
                    </div>
                </div>
                <div id="sprachen">
                    <img src="img/assets/austria.png" id="deutsch" draggable="false" onclick="selectSettings('deutsch')">
                    <img src="img/assets/united-states.png" id="englisch" draggable="false" onclick="selectSettings('englisch')">
                    <img src="img/assets/spain.png" id="spanisch" draggable="false" onclick="selectSettings('spanisch')">
                </div>
                <div class="speichernbuttons">
                    <div class="savebutton" onclick="saveSettings()">
                        <p>Guardar</p>
                    </div>
                    <div class="standardButton">
                        <p>Por defecto</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="settingsPopupDarkmode">
        <div id="innerrectangleDarkmode">
            <div id="backDarkmode" onclick="CloseOverlays('settings')">
                <img src="img/assets/icons/back.png" alt="" id="backbuttonDarkmode">
                <p id="einstellungenDarkmode">Ajustes</p>
            </div>
            <div id="changeMode">
                <div class="changesettingbuttons">
                    <div class="darkmode" onclick="isActive('darkmode')">
                        <p>Modo oscuro</p>
                    </div>
                    <div class="sprache" onclick="isActive('sprache')">
                        <p>Idioma</p>
                    </div>
                </div>
                <div id="darkLightMode">
                    <img src="img/assets/AutoMode.png" draggable="false" id="autoMode" onclick="selectSettings('autoMode')">
                    <img src="img/assets/LightMode.png" draggable="false" id="lightMode" onclick="selectSettings('lightMode')">
                    <img src="img/assets/DarkMode.png" draggable="false" id="darkMode" onclick="selectSettings('darkMode')">
                </div>
                <div class="speichernbuttons">
                    <div class="savebutton" onclick="saveSettings()">
                        <p>Guardar</p>
                    </div>
                    <div class="standardButton">
                        <p>Por defecto</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

//-----------------VARIABLEN--------------------------------------------------------------

let backbutton = document.getElementById("back");
let spracheMenueButton = document.getElementsByClassName("sprache");
let darkmodeMenueButton = document.getElementsByClassName("darkmode");
let mainHeadline = document.getElementById("mainHeadline");

let sprachenAuswahl;
let modeAuswahl;

//-----------------Frames---------------------------------------------

let container = document.getElementById("contianer");
let body = document.getElementById("body");

let settings = document.getElementById("settingspopup");
let settingsSprache = document.getElementById("settingsPopupSprache");
let settingsDarkmode = document.getElementById("settingsPopupDarkmode");
let login = document.getElementById("loginpopup");

//-----------------Sprachen und Modi---------------------------------------------

let deutsch = document.getElementById("deutsch");
let englisch = document.getElementById("englisch");
let spanisch = document.getElementById("spanisch");

let autoMode = document.getElementById("autoMode");
let lightMode = document.getElementById("lightMode");
let darkMode = document.getElementById("darkMode");

//-----------------OpenAndCloseOverlays---------------------------------------------------------

function OpenOverlays(id) {
  switch (id) {
    case "settings":
      settings.style.display = "block";
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
      //spracheMenueButton.style.backgroundColor = "var(--blueTextColor)"
      //darkmodeMenueButton.style.backgroundColor = "var(--grayBackColor)"
      settingsDarkmode.style.display = "none"
      settingsSprache.style.display = "block"
      break;
    case "darkmode":
      //darkmodeMenueButton.style.backgroundColor = "var(--blueTextColor)"
      //spracheMenueButton.style.backgroundColor = "var(--grayBackColor)"
      settingsSprache.style.display = "none";
      settingsDarkmode.style.display = "block"
      break;
  }
}

//------------------SelectSettings and Save------------------------------------------------------------------------

function selectSettings(id) {
  switch (id) {
    case "deutsch":
      sprachenAuswahl = 1
      deutsch.style.backgroundColor = "yellow";
      deutsch.style.borderRadius = "1vw"
      //---
      englisch.style.backgroundColor = "transparent";
      spanisch.style.backgroundColor = "transparent";
      break;
    case "englisch":
      sprachenAuswahl = 2
      englisch.style.backgroundColor = "yellow";
      englisch.style.borderRadius = "1vw"
      //---
      spanisch.style.backgroundColor = "transparent";
      deutsch.style.backgroundColor = "transparent";
      break;
    case "spanisch":
      sprachenAuswahl = 3
      spanisch.style.backgroundColor = "yellow";
      spanisch.style.borderRadius = "1vw"
      //---
      englisch.style.backgroundColor = "transparent";
      deutsch.style.backgroundColor = "transparent";
      break;
    case "autoMode":
      modeAuswahl = 1;
      autoMode.style.border = "2px solid yellow";
      darkMode.style.border = "none";
      lightMode.style.border = "none";
      break;
    case "lightMode":
      modeAuswahl = 2;
      lightMode.style.border = "2px solid yellow";
      darkMode.style.border = "none";
      autoMode.style.border = "none";
      break;
    case "darkMode":
      modeAuswahl = 3;
      darkMode.style.border = "2px solid yellow";
      lightMode.style.border = "none";
      autoMode.style.border = "none";
      break;
  }
}

function saveSettings() {
  CloseOverlays("settings")
  switch (sprachenAuswahl) {
    case 1:
      location.reload()
      break;
    case 2:
      CloseOverlays("settings")
      container.innerHTML = englishString;
      break;
    case 3:
      CloseOverlays("settings")
      container.innerHTML = spanishString;
      break;
  }
  switch (modeAuswahl) {
    case 1:
      location.reload()
      break;
    case 2:
      mainHeadline.style.color = "black"
      body.style.backgroundColor = "var(--backgroundColor)"
      break;
    case 3:
      mainHeadline.style.color = "white"
      body.style.backgroundColor = "black"
      break;
  }
}


