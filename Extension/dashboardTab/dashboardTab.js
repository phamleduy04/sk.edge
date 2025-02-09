import { getData, setData } from "../chrome_store.js";

async function settingsClicked() {
    window.location = "../settingsTab/settingsTab.html";
}

async function helpClicked() {
    window.location = "../helpTab/helpTab.html";
}

let settingsBtn = $("#settings-btn");
settingsBtn.on("click", settingsClicked);

let helpBtn = $("#help-btn");
helpBtn.on("click", helpClicked);

let exitBtn = $("#exit-dash-btn");
exitBtn.on("click", () => { 
    window.open("https://www.utdallas.edu/galaxy/","_blank")
    window.close();
});