const buttons = document.querySelectorAll(".color-button");
const randomButton = document.querySelector("#random-button");
const body = document.getElementsByTagName("body")[0];
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.innerText;
    body.style.backgroundColor = color;
  });
});

function randomColors() {
  randomButton.addEventListener("click", () => {
    const value1 = 255 * Math.random();
    const value2 = 255 * Math.random();
    const value3 = 255 * Math.random();
    body.style.backgroundColor = `rgb(${value1}, ${value2}, ${value3})`;
});
}
