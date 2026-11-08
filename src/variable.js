import appData from "./appData.js";

// 取得水量
function getWaterVolume() {
  return appData.waterVolume;
}

// 修改水量
function setWaterVolume(value) {
  appData.waterVolume = value;
}

export { getWaterVolume, setWaterVolume };
