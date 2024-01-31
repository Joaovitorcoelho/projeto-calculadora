let displayValue = '';
let history = [];

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    addToHistory(displayValue + ' = ' + result);
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function addToHistory(operation) {
  const now = new Date();
  const time = now.toLocaleTimeString();
  history.push({ time, operation });
  if (history.length > 4) {
    history.shift();
  }
  updateHistoryDisplay();
}

function updateHistoryDisplay() {
  const historyDisplay = document.getElementById('history');
  historyDisplay.innerHTML = '';
  history.forEach(item => {
    const historyItem = document.createElement('div');
    historyItem.textContent = item.time + ' - ' + item.operation;
    historyItem.addEventListener('click', () => {
      displayValue += item.operation.split('=')[0].trim();
      document.getElementById('display').value = displayValue;
    });
    historyDisplay.appendChild(historyItem);
  });
}

window.onload = function () {
  updateHistoryDisplay();
};
