import { getWaterVolume } from "./variable.js";
import { drinkingRecord } from "./connect.js";

// 函式：紀錄喝哪一個毫升的水
function recording(newRecord) {
  // 今天日期(yyyy/mm/dd)
  const today = new Date().toLocaleDateString("zh-TW", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  // 現在時間
  const nowTime = new Date().toLocaleTimeString("zh-TW").slice(0, 7);

  // 加入時間紀錄
  const recordItem = document.createElement("div");
  recordItem.classList.add("record-item");
  const date = document.createElement("span");
  date.textContent = `${today} `;
  recordItem.append(date);
  const time = document.createElement("span");
  time.textContent = `${nowTime} `;
  recordItem.append(time);

  // 加入文字紀錄
  const text = document.createElement("span");
  if (newRecord === 100) {
    text.textContent = "喝了100ml";
  } else if (newRecord === 250) {
    text.textContent = "喝了250ml";
  } else if (newRecord === 500) {
    text.textContent = "喝了500ml";
  }
  recordItem.append(text);

  // 當喝到2000ml，出現讚美文字
  const praise = document.createElement("span");
  praise.style.color = "red";
  praise.style.fontWeight = "bold";

  // 目前水量
  let currentVolume = getWaterVolume();
  if (currentVolume + newRecord > 2000 || currentVolume + newRecord === 2000) {
    praise.textContent = "恭喜你～今日達標了!";
    recordItem.removeChild(date);
    recordItem.removeChild(time);
    recordItem.removeChild(text);
    recordItem.append(praise);
  }
  drinkingRecord.append(recordItem);
}

export default recording;
