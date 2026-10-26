const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");
const calculateBtn = document.getElementById("calculate");
const resultBox = document.getElementById("result");
const amountEl = document.getElementById("amount");
const errorEl = document.getElementById("error");

function calculateTotal(bill, tipPercent) {
  return bill + bill * (tipPercent / 100);
}

function splitBill(total, people) {
  return total / people;
}

function showError(message) {
  errorEl.textContent = message;
  resultBox.style.display = "none";
}

calculateBtn.addEventListener("click", function () {
  const bill = Number(billInput.value);
  const tip = Number(tipInput.value);
  const people = Number(peopleInput.value);

  errorEl.textContent = "";

  if (bill <= 0) {
    showError("Bill amount must be greater than 0");
  } else if (tip < 0) {
    showError("Tip cannot be negative");
  } else if (!Number.isInteger(people) || people < 1) {
    showError("Number of people must be a whole number, at least 1");
  } else {
    const total = calculateTotal(bill, tip);
    amountEl.textContent = "₹" + splitBill(total, people).toFixed(2);
    resultBox.style.display = "block";
  }
});