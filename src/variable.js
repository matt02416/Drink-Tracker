// 紀錄水的值(水桶)
let waterVolume = 0;

// 紀錄水的值(進度表)
let progress = 0;

// 取得水量
function getWaterVolume() {
  return waterVolume;
}

// 修改水量
function setWaterVolume(value) {
  waterVolume = value;
}

export { getWaterVolume, setWaterVolume };
