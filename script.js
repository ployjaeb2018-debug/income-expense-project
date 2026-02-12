let totalIncome = 0;
let totalExpense = 0;

function saveData() {
  const date = document.getElementById("date").value;
  const detail = document.getElementById("detail").value;
  const type = document.getElementById("type").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (!date || !detail || !amount) {
    alert("กรอกข้อมูลให้ครบ");
    return;
  }

  const list = document.getElementById("list");
  const li = document.createElement("li");

  // แปลง income / expense เป็นภาษาไทย
  let typeText = type === "income" ? "รายรับ" : "รายจ่าย";
  li.textContent = `${date} - ${detail} - ${typeText} - ${amount} บาท`;

  list.appendChild(li);

  // คำนวณยอดรวม
  if (type === "income") {
    totalIncome += amount;
    document.getElementById("totalIncome").textContent = totalIncome;
  } else {
    totalExpense += amount;
    document.getElementById("totalExpense").textContent = totalExpense;
  }

  // คำนวณยอดคงเหลือ
  const balance = totalIncome - totalExpense;
  const balanceElement = document.getElementById("balance");

  balanceElement.textContent = balance;

  if (balance < 0) {
    balanceElement.style.color = "red";
  } else {
    balanceElement.style.color = "green";
  }

  // เคลียร์ช่องกรอก
  document.getElementById("date").value = "";
  document.getElementById("detail").value = "";
  document.getElementById("amount").value = "";
}