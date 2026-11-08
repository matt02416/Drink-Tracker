// 匯入函式
import { drinkingWater, savedbottleHeight } from "./src/drinkingWater.js";
import cleanOut from "./src/cleanOut.js";
import { initProgress } from "./src/displayProgress.js";
import { add100, add250, add500, cleanBtn } from "./src/connect.js";
import appData from "./src/appData.js";

// 初始化函式：負責恢復水桶高度
savedbottleHeight();
// 初始化函式：負責恢復進度條
initProgress();

// 點擊事件
add100.addEventListener("click", () => {
  drinkingWater(100, 14);
});

add250.addEventListener("click", () => {
  drinkingWater(250, 35);
});

add500.addEventListener("click", () => {
  drinkingWater(500, 70);
});

cleanBtn.addEventListener("click", () => {
  cleanOut();
});
