import { getWaterVolume, setWaterVolume } from "./variable.js";
import { water, drinkingRecord, progress, completion } from "./connect.js";
import { getBottleVolume, setBottleVolume } from "./drinkingWater.js";
import {
  getDrinkingValue,
  setDrinkingValue,
  getCompletionValue,
  setCompletionValue,
} from "./displayProgress.js";
import appData from "./appData.js";
import { saveData } from "./save.js";

// 函式：清除紀錄
function cleanOut() {
  // 目前水量
  let currentVolume = getWaterVolume();
  // 目前水瓶
  let bottleVolume = getBottleVolume();
  // 目前喝水量
  let drinkingValue = getDrinkingValue();
  // 目前完成度
  let completionValue = getCompletionValue();
  drinkingRecord.innerHTML = "";
  currentVolume = 0;
  bottleVolume = 0;
  drinkingValue = 0;
  completionValue = 0;
  water.style.height = 0;
  progress.style.width = 0;
  completion.style.width = 0;
  setWaterVolume(currentVolume);
  setBottleVolume(bottleVolume);
  setDrinkingValue(drinkingValue);
  setCompletionValue(completionValue);
  appData.records.length = 0;
  saveData();
}

export default cleanOut;
