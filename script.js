function calculatePercentage() {
  const percent = parseFloat(document.getElementById('percentage').value);
  const total = parseFloat(document.getElementById('total').value);
  
  const resultDiv = document.getElementById('result');

  if (isNaN(percent) || isNaN(total)) {
    resultDiv.innerText = "Please enter valid numbers.";
    return;
  }

  const result = (percent / 100) * total;
  resultDiv.innerText = `${percent}% of ${total} is ${result}`;
}
