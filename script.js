//your code here
const textBox = document.getElementById("evaluatedText");
    const countDisplay = document.getElementById("letterCount");

    textBox.addEventListener("input", () => {
      countDisplay.textContent = textBox.value.length;