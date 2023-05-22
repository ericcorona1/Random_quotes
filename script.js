const quoteSection = document.getElementById("quote");
const authorSection = document.getElementById("author");
const generateButton = document.getElementById("generate");
const twitterButton = document.getElementById("twitter-btn");
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
  rootElement.style.setProperty("--primary-color", selectedColor);
}

// Fade in Quote & Author
function changeOpacity() {
  quoteSection.style.opacity = 0;
  authorSection.style.opacity = 0;
  
  setTimeout(() => {
    quoteSection.style.opacity = 1;
    authorSection.style.opacity = 1;
  }, 1000);
}

function generateQuote() {
  fetch("https://api.quotable.io/quotes/random")
  .then((res) => res.json())
  .then((data) => {
    const quoteText = data[0].content;
      const quoteAuthor = data[0].author;
      const twitterLink = `https://twitter.com/intent/tweet?text="${quoteText}"%0A%0A- ${quoteAuthor}`;

      twitterButton.href = twitterLink;
      quoteSection.innerText = '"' + quoteText + '"';
      authorSection.innerText = "- " + quoteAuthor;
    });
  }

  // Event listener
  generateButton.addEventListener("click", () => {
    changeOpacity();
    setTimeout(generateQuote, 500);
    setTimeout(changeColor, 500);
  });

changeOpacity();
setTimeout(generateQuote, 500);
setTimeout(changeColor, 500);