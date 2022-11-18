const bodyEl = document.body;
const buttonEl = document.getElementById("btn");
// const continue = document.getElementById("cont");

buttonEl.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
    bodyEl.classList.toggle("dark");
    if(buttonEl.innerHTML === "DARK"){
        buttonEl.innerHTML = "LIGHT";
        buttonEl.setAttribute("style", "background-color: #fff; color: #000");
    } else {
        buttonEl.innerHTML = "DARK";
    }
}

// function continuePage() {
  
 
// }
