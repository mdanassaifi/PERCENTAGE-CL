function calculatePercentage() {
  const percent = parseFloat(document.getElementById('percentage').value);
  const total = parseFloat(document.getElementById('total').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(percent) || isNaN(total)) {
    resultDiv.innerText = "Please enter valid numbers.";
    return;
  }

  const result = ((percent / 100) * total).toFixed(2);

  resultDiv.innerHTML = `
    ✅ <strong>${percent}%</strong> of <strong>${total}</strong> is <strong>${result}</strong><br>
    💰 Total Amount: <strong>${total}</strong>
  `;
}

// Enter key trigger
document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    calculatePercentage();
  }
});
