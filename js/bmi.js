"use strict";

let height = parseFloat(prompt("请输入身高(m):"));
let weight = parseFloat(prompt("请输入体重(kg):"));

let bmi = weight / height / height;
let status;
if (bmi < 18.5) {
  status = "过轻";
} else if (bmi >= 18.5 && bmi < 25) {
  status = "正常";
} else if (bmi >= 25) {
  status = "重";
}
function show() {
  let message = "bmi=" + bmi + "\n" + status;
  alert(message);
}
show();
