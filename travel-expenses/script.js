const expenses = [];

const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const addBtn = document.getElementById("add");
const errorEl = document.getElementById("error");
const totalEl = document.getElementById("total");
const listEl = document.getElementById("list");

function render() {
  listEl.innerHTML = "";

  expenses.forEach((item, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.title}</td>
      <td>${item.category}</td>
      <td>${item.amount}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;

    row.querySelector(".delete-btn").addEventListener("click", () => {
      expenses.splice(index, 1);
      render();
    });

    listEl.appendChild(row);
  });

  const total = expenses.reduce((sum, item) => sum + item.amount, 0);
  totalEl.textContent = "₹" + total;
}

addBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const amount = Number(amountInput.value);
  const category = categoryInput.value;

  if (title === "") {
    errorEl.textContent = "Please enter a title";
  } else if (amount <= 0) {
    errorEl.textContent = "Amount must be greater than 0";
  } else {
    errorEl.textContent = "";
    expenses.push({ title, amount, category });
    titleInput.value = "";
    amountInput.value = "";
    render();
  }
});