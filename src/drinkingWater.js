import { getWaterVolume, setWaterVolume } from "./variable.js";
import { water } from "./connect.js";
import recording from "./recording.js";
import { displayProgress } from "./displayProgress.js";
import appData from "./appData.js";
import { saveData, loadData } from "./save.js";

// 初始化函式：負責恢復水桶高度
function savedbottleHeight() {
  loadData();
  water.style.height = `${appData.bottleVolume}px`;
}

// 函式：當水達到280px高度時歸零
function drinkingWater(volume, bottle) {
  let currentVolume = getWaterVolume();
  if (appData.bottleVolume === 280 && currentVolume === 2000) {
    appData.bottleVolume = 280;
    currentVolume = 2000;
    return;
  } else {
    if (280 - appData.bottleVolume < bottle || 2000 - currentVolume < volume) {
      appData.bottleVolume = Math.min(appData.bottleVolume + bottle, 280);
      currentVolume = Math.min(currentVolume + volume, 2000);
    } else {
      currentVolume += volume;
      appData.bottleVolume += bottle;
    }
  }

  water.style.height = `${appData.bottleVolume}px`;

  recording(volume);
  displayProgress(volume);
  setWaterVolume(currentVolume);
  saveData();
}

function getBottleVolume() {
  return appData.bottleVolume;
}

function setBottleVolume(value) {
  appData.bottleVolume = value;
}

export { drinkingWater, getBottleVolume, setBottleVolume, savedbottleHeight };
