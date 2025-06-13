function calculatePercentage() {
  const percent = parseFloat(document.getElementById('percentage').value);
  const total = parseFloat(document.getElementById('total').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(percent) || isNaN(total)) {
    resultDiv.innerHTML = "⚠️ Please enter valid numbers in both fields.";
    return;
  }

  const discount = ((percent / 100) * total).toFixed(2);
  const payable = (total - discount).toFixed(2);

  resultDiv.innerHTML = `
    <p>✅ <strong>${percent}%</strong> of <strong>${total}</strong> is <strong>${discount}</strong></p>
    <p>💰 <strong>Total Amount:</strong> ${total}</p>
    <p>💸 <strong>Payable Amount After Discount:</strong> ${payable}</p>
  `;
}

// Enter key triggers calculation
document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    calculatePercentage();
  }
});
