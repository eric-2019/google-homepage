"use strict";

function bmitest() {
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
}

document.querySelector('#form').onsubmit = async (e) => {
  e.preventDefault();
  const q = document.querySelector('#search').value;
  const res = await fetch(
      `https://api.plankton.technology/get?q=${q}&offset=0`, {
          mode: 'cors'
      });
  const data = await res.json();
  let str = '<h2><a href="https://bubble.plankton.technology/" target="_blank">Bubble</a></h2>';
  data.forEach(link => {

      str += `
      <div  class="result" ><h3>${link.title}</h3>
      <cite>
          <a href=${link.url} target="_blank">
              ${link.url}    
          </a>
       </cite>
       </div>
      `

  });
  document.getElementById('result').innerHTML = str;
}
  
