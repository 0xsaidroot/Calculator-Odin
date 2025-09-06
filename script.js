function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b !== 0) return a / b;
    return 0;
}
function operate(Operator, firstNumber, secondNumber) {
    let result = 0;
    switch (Operator) {
        case '+': return add(firstNumber, secondNumber);
        case '-': return subtract(firstNumber, secondNumber);
        case '*': return multiply(firstNumber, secondNumber);
        case '/': return divide(firstNumber, secondNumber);
        case 'pow': return Math.pow(firstNumber, secondNumber);
        default: return 'Invalid Syntax...'
    }
}
function input(target) {

    if (numbers.includes(target)) {
        let entry = target;

        if (isDone) {
            secondNumber += entry;
            screen.textContent += entry;
        } else {
            firstNumber += entry;
            screen.textContent = firstNumber;
        }

        console.log({ firstNumber });
        console.log({ secondNumber });

    } else if (operators.includes(target)) {
        console.log({ firstNumber });
        console.log({ secondNumber });

        if (result !== '') {
            firstNumber = screen.textContent;
            operated=false;
        }
        if (firstNumber !== '' && secondNumber !== '') {
            firstNumber = operate(Operator, parseInt(firstNumber), parseInt(secondNumber));
            secondNumber = '';
            screen.textContent = firstNumber;
        }



    } else if (special.includes(target)) {

        if (target === 'AC') {
            firstNumber = '';
            secondNumber = '';
            screen.textContent = '0';
            isDone = false;
        } else if (target === 'remove') {
            if (isDone) {
                secondNumber = secondNumber.split('').slice(0, -1).join('');
                screen.textContent = screen.textContent.split('').slice(0,-1).join('');
            } else {
                firstNumber = firstNumber.split('').slice(0, -1).join('');
                screen.textContent = firstNumber;
            }

            console.log({ target });
            console.log({firstNumber});
            console.log({secondNumber});
        }

    } else if (target === 'equality') {

        if (firstNumber === '' && result !== '') {
            result = operate(previousOperator, parseInt(previousFirstNumber), parseInt(previousSecondNumber));
            screen.textContent = result;
            console.log(`Consecutive result: ${result}`);

        } else {
            result = operate(Operator, parseInt(firstNumber), parseInt(secondNumber));
            screen.textContent = result;
            console.log({ result });

            previousFirstNumber = result;
            previousSecondNumber = secondNumber;
            previousOperator = Operator;

            firstNumber = '';
            secondNumber = '';
            Operator = '';
        }
    } else return;

}


let firstNumber = '';
let secondNumber = '';
let Operator = '';
let operated = false;
let result = 0;
let isDone = false;
let counter = 0;
let previousFirstNumber = '';
let previousSecondNumber = '';
let previousOperator = '';
const PI = 3.1415926536;
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operators = ['+', '-', '*', '/', 'pow'];
const special = ['AC', 'root', 'PI', 'remove']

const screen = document.querySelector('#screen');
screen.textContent = '0';
const buttons = document.querySelector('#buttons');

buttons.addEventListener('click', function (event) {
    let target = event.target.id;
    input(target);

})