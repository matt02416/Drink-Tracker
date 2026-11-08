import appData from "./appData.js";

function saveData() {
  localStorage.setItem("appData", JSON.stringify(appData));
}

function loadData() {
  const saveData = JSON.parse(localStorage.getItem("appData"));
  if (saveData) {
    Object.assign(appData, saveData);
  }
}

export { saveData, loadData };
