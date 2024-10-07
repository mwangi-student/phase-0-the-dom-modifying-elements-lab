// Remove the <main> element
const main = document.getElementById("main");
main.remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set the id of the new header
newHeader.id = "victory";

// Set the text content of the new header
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your name

// Optionally, append the new header to the body or another element
document.body.appendChild(newHeader);
