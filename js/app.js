import "../css/style.css";

const result = document.getElementById("result");

let time = 0;

result.textContent = time;

let interval = setInterval(() => {
    time++
    result.textContent = time;
    if(time >= 9) clearInterval(interval);
}, 1000)