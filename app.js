const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "purple",
  "orange",
  "brown",
  "grey",
  "cyan",
  "indigo",
  "violet",
];
const btn = document.getElementById("btn");
const colorDisplay = document.getElementById("color-display"); // The div that will change color
const colorText = document.querySelector(".color"); // The span that shows the color name

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  const newColor = colors[randomNumber];

  // Change background color of the color display div
  colorDisplay.style.backgroundColor = newColor;
  colorText.textContent = newColor; // Display the color name
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
