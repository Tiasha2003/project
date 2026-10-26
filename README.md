# project
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Expense Tracker</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">
    <h1>Expense Tracker</h1>

    <input type="text" id="title" placeholder="Title (e.g. Lunch)">
    <input type="number" id="amount" placeholder="Amount">
    <select id="category">
      <option value="Food">Food</option>
      <option value="Travel">Travel</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Other">Other</option>
    </select>
    <button id="add">Add Expense</button>
    <p id="error"></p>

    <h2>Total: <span id="total">₹0</span></h2>
    
    <table>
  <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Category</th>
      <th>Amount (₹)</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody id="list"></tbody>
</table>
  </div>
  <script src="script.js"></script>
</body>
</html>


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


* {
  box-sizing: border-box;
}
body { font-family: Arial, sans-serif; background: #f0f2f5; display: flex; justify-content: center; padding: 30px; }
.card { background: white; padding: 25px; border-radius: 12px; width: 100%; max-width: 420px; }
input, select, button { width: 100%; padding: 10px; margin-bottom: 10px; font-size: 16px; }
button { background: #667eea; color: white; border: none; border-radius: 8px; cursor: pointer; }
#error { color: #d93025; min-height: 18px; }
li { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
table { width: 100%; border-collapse: collapse; margin-top: 10px; }
th, td { padding: 10px; text-align: left; border-bottom: 1px solid #eee; font-size: 14px; }
th { background: #667eea; color: white; }
tr:hover td { background: #f5f6ff; }
.delete-btn { width: auto; padding: 5px 10px; margin: 0; font-size: 13px; background: #d93025; }
