import "../css/style.css";

const result = document.getElementById("result");

let time = 0;

result.textContent = time;

setInterval(() => {
    time++
    result.textContent = time;
}, 1000)