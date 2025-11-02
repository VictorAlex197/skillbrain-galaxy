document.addEventListener("DOMContentLoaded", function() {

const adviceText = document.getElementById("advice-text");
const adviceId = document.getElementById("advice-id");
const diceButton = document.getElementById("dice-button");

 function getAdvice() {

    diceButton.disabled = true;

    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
      .then(function(response) {
        return response.json();
      })

      .then(function(data) {
        const adviceSlip = data.slip;
        adviceText.textContent = `"${adviceSlip.advice}"`;
        adviceId.textContent = `${adviceSlip.id}`;
      })

      .catch(function(error) {
        adviceText.textContent = "A intervenit o eroare...";
        adviceId.textContent = "--";
        console.error("Eroare:", error);
      })

      .finally(function() {
    diceButton.disabled = false;
    });
  }

diceButton.addEventListener("click", getAdvice);

getAdvice();
});