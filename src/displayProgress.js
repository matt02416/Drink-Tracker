import { progress, completion } from "./connect.js";
import { getWaterVolume, setWaterVolume } from "./variable.js";

// 進度條總長度
const progressWidth = 369.6;
// 總水量
const totalWaterVolume = 2000;
// 每一格長度
const unit = progressWidth / totalWaterVolume;
// 目前喝水量
let drinkingValue = 0;
// 完成量
let completionValue = 0;

function displayProgress(addValue) {
  // 共用水量
  let currentVolume = getWaterVolume();
  if (2000 - currentVolume < addValue) {
    currentVolume = currentVolume + (2000 - currentVolume);
  } else {
    currentVolume += addValue;
  }
  // 完成度百分比
  let percent = currentVolume / totalWaterVolume;
  drinkingValue = unit * currentVolume;
  completionValue = percent * progressWidth;

  if (drinkingValue > progressWidth && completionValue > progressWidth) {
    drinkingValue = progressWidth;
    completionValue = progressWidth;
  }

  progress.style.width = `${drinkingValue}px`;
  completion.style.width = `${completionValue}px`;
  setWaterVolume(currentVolume);
  console.log(currentVolume);
  console.log(completionValue);
}

function getDrinkingValue() {
  return drinkingValue;
}
function setDrinkingValue(currentProgress1) {
  drinkingValue = currentProgress1;
}

function getCompletionValue() {
  return completionValue;
}
function setCompletionValue(currentProgress2) {
  completionValue = currentProgress2;
}

export {
  displayProgress,
  getDrinkingValue,
  setDrinkingValue,
  getCompletionValue,
  setCompletionValue,
};
