// 匯入函式
import { drinkingWater } from "./src/drinkingWater.js";
import cleanOut from "./src/cleanOut.js";
import { add100, add250, add500, cleanBtn } from "./src/connect.js";

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
