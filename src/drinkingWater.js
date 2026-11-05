import { getWaterVolume, setWaterVolume } from "./variable.js";
import { water } from "./connect.js";
import recording from "./recording.js";
import { displayProgress } from "./displayProgress.js";

// 水瓶單位轉換變數
let bottleVolume = 0;

// 函式：當水達到280px高度時歸零
function drinkingWater(volume, bottle) {
  let currentVolume = getWaterVolume();
  if (bottleVolume === 280 && currentVolume === 2000) {
    bottleVolume = 280;
    currentVolume = 2000;
    return;
  } else {
    if (280 - bottleVolume < bottle && 2000 - currentVolume < volume) {
      bottleVolume = bottleVolume + (280 - bottleVolume);
      currentVolume = currentVolume + (2000 - currentVolume);
    } else {
      currentVolume += volume;
      bottleVolume += bottle;
    }
  }

  water.style.height = `${bottleVolume}px`;

  recording(volume);
  displayProgress(volume);
  setWaterVolume(currentVolume);
  console.log(currentVolume);
  console.log(bottleVolume);
}

function getBottleVolume() {
  return bottleVolume;
}

function setBottleVolume(value) {
  bottleVolume = value;
}

export { drinkingWater, getBottleVolume, setBottleVolume };
