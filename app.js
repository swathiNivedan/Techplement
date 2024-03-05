const calculatorHistory = [];

function calculate() {
    const userInput = '2+2'; // For demonstration purposes
    const result = 4;

    const calculation = { expression: userInput, result, timestamp: new Date() };
    calculatorHistory.push(calculation);

    const display = document.getElementById('display');
    display.value = result;
}

async function fetchHistory() {
    try {
        const response = await fetch('http://localhost:3000/history');
        const data = await response.json();

        const historyList = document.getElementById('history-list');
        historyList.innerHTML = '';

        if (Array.isArray(data.history) && data.history.length > 0) {
            data.history.forEach(historyItem => {
                const listItem = document.createElement('li');
                listItem.textContent = `${historyItem.expression} = ${historyItem.result}`;
                historyList.appendChild(listItem);
            });
        } else {
            console.log('No history data received from the server.');
        }
    } catch (error) {
        console.error('Error fetching history:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchHistory);

const historyButton = document.getElementById('historyButton');
historyButton.addEventListener('click', fetchHistory);

function updateHistoryUI(historyData) {
    console.log(historyData);
}

historyButton.addEventListener('click', async () => {
    try {
        const response = await fetch('/api/history');
        const historyData = await response.json();
        updateHistoryUI(historyData);
        historySection.classList.toggle('visible');
    } catch (error) {
        console.error('Error fetching history:', error);
    }
});

buttonsContainer.appendChild(historyButton);
