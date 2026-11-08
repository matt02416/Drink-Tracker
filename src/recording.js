import { getWaterVolume } from "./variable.js";
import { drinkingRecord } from "./connect.js";
import appData from "./appData.js";
import { saveData } from "./save.js";

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

  // 負責記錄文字的物件
  const textRecord = {
    amount: newRecord,
    date: today,
    time: nowTime,
    message: `喝了${newRecord}ml`,
    isCompleted: false,
  };
  appData.records.push(textRecord);
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
  text.textContent = textRecord.message;
  recordItem.append(text);

  // 當喝到2000ml，出現讚美文字
  const praise = document.createElement("span");
  praise.style.color = "red";
  praise.style.fontWeight = "bold";

  // 目前水量
  let currentVolume = getWaterVolume();
  if (currentVolume + newRecord > 2000 || currentVolume + newRecord === 2000) {
    textRecord.isCompleted = true;
    praise.textContent = "恭喜你達到今日目標！";
    recordItem.removeChild(date);
    recordItem.removeChild(time);
    recordItem.removeChild(text);
    recordItem.append(praise);
  }
  drinkingRecord.append(recordItem);
  appData.records.push(textRecord);
  saveData();
}

export default recording;
