function calculatePercentage() {
  const percent = parseFloat(document.getElementById('percentage').value);
  const total = parseFloat(document.getElementById('total').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(percent) || isNaN(total)) {
    resultDiv.innerHTML = "⚠️ Please enter valid numbers in both fields.";
    return;
  }

  const result = ((percent / 100) * total).toFixed(2);

  resultDiv.innerHTML = `
    <p>📌 <strong>${percent}%</strong> of <strong>${total}</strong> is <strong>${result}</strong></p>
    <p>💰 <strong>Total Amount:</strong> ${total}</p>
    <p>🧮 <strong>Calculated Value:</strong> ${result}</p>
  `;
}

// Enter key triggers calculate
document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    calculatePercentage();
  }
});
