const quoteSection = document.getElementById("quote");
const authorSection = document.getElementById("author");
const generateButton = document.getElementById("generate");
const colorPalette = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];
const rootElement = document.querySelector(":root");

//Change primary color var in css
function changeColor() {
  const randomColor = Math.floor(Math.random() * colorPalette.length);
  const selectedColor = colorPalette[randomColor];
  console.log(selectedColor);
  rootElement.style.setProperty("--primary-color", selectedColor);
}

function generateQuote() {
  fetch("https://api.quotable.io/quotes/random")
    .then((res) => res.json())
    .then((data) => {
      console.log(data[0].content);
      console.log(data[0].author);
      const quoteText = data[0].content;
      const quoteAuthor = data[0].author;

      quoteSection.innerText = '"' + quoteText + '"';
      authorSection.innerText = "- " + quoteAuthor;
    });
}

// Event listener
generateButton.addEventListener("click", () => {
  generateQuote();
  changeColor();
});

generateQuote();
changeColor();
