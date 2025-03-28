//-----------------VARIABLEN--------------------------------------------------------------

let backbutton = document.getElementById("back");

//-----------------Frames---------------------------------------------

let settings = document.getElementById("settingspopup");
let login = document.getElementById("loginpopup");

//-----------------OpenACloseOverlays---------------------------------------------------------

function OpenOverlays(id) {
    switch(id) {
        case "settings":
            settings.style.display = "block";
          break;
        case "login":
            login.style.display = "block";
          break;
      }
}

function CloseOverlays(id) {
    switch(id) {
        case "settings":
            settings.style.display = "none";
          break;
        case "login":
            login.style.display = "none";
          break;
      }
}


