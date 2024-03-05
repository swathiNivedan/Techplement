const calculatorHistory = [];

function calculate(expression) {
    try {
        const result = eval(expression);
        const calculation = { expression, result, timestamp: new Date() };
        calculatorHistory.push(calculation);
        return result;
    } catch (error) {
        console.error('Error performing calculation:', error);
        return 'Error';
    }
}

function clearHistory() {
    calculatorHistory.length = 0;
}

const expressionToCalculate = '2 + 2';
const result = calculate(expressionToCalculate);
console.log('Result:', result);
console.log('History:', calculatorHistory);
