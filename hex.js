// Array of hexadecimal characters
const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

// DOM elements
const btn = document.getElementById("btn"); // Button to trigger color change
const color = document.querySelector(".color"); // Display hex code
const colorDisplay = document.querySelector(".color-display"); // Div showing the color
const copyBtn = document.getElementById("copy-btn"); // Button to copy the hex color

// Event listener for clicking the button to change color
btn.addEventListener("click", function () {
  const hexColor = getHexColor();

  // Update the displayed hex code
  color.textContent = hexColor;

  // Update the color display div with the new color
  colorDisplay.style.backgroundColor = hexColor;
});

// Function to generate a random hex color
function getHexColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  return hexColor;
}

// Function to get a random number from the hex array
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

// Copy the hex color to clipboard when the copy button is clicked
copyBtn.addEventListener("click", function () {
  const hexColor = color.textContent;
  navigator.clipboard
    .writeText(hexColor)
    .then(() => {
      alert(`Copied: ${hexColor}`);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
});
