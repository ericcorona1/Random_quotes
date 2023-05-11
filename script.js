const quoteSection = document.getElementById("quote");
const authorSection = document.getElementById("author");
const generateButton = document.getElementById("generate");

function generateQuote() {
    fetch("https://api.quotable.io/quotes/random")
        .then(res => res.json())
        .then(data => {
            console.log(data[0].content);
            console.log(data[0].author);
            const quoteText = data[0].content;
            const quoteAuthor = data[0].author;

            quoteSection.innerText = '"' + quoteText + '"';
            authorSection.innerText = "- " + quoteAuthor;
        })
}

// Event listener
generateButton.addEventListener('click', () => {
    generateQuote();
})

generateQuote();
