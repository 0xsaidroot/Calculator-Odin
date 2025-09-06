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
    switch (Operator) {
        case '+': return add(firstNumber, secondNumber).toFixed(2);
        case '-': return subtract(firstNumber, secondNumber).toFixed(2);
        case '*': return multiply(firstNumber, secondNumber).toFixed(2);
        case '/': return divide(firstNumber, secondNumber).toFixed(2);
        case 'pow': return Math.pow(firstNumber, secondNumber).toFixed(2);
        default: return 'Invalid Syntax...'
    }
}
function input(target) {

    if (numbers.includes(target)) {
        let entry = target;

        if (isDone) {
            secondNumber += entry;
            screen.textContent += entry;
            operatorClicked = false;
        } else {
            firstNumber += entry;
            console.log(`Screen : ${screen.textContent}`);
            screen.textContent = firstNumber;
        }

        console.log({ firstNumber });
        console.log({ secondNumber });

    } else if (operators.includes(target)) {
        console.log({ firstNumber });
        console.log({ secondNumber });

        if (result !== '') {
            firstNumber = parseInt(screen.textContent);
            console.log({ firstNumber });
        }
        if (firstNumber !== '' && secondNumber !== '') {
            firstNumber = operate(Operator, parseInt(firstNumber), parseInt(secondNumber));
            secondNumber = '';
            screen.textContent = firstNumber;
        }

        if (operatorClicked === true) {
            Operator = target;
            screen.textContent = screen.textContent.split('').slice(0, -2).join('') + ` ${Operator} `;
            console.log(`Operator clicked: ${Operator}`);
        } else {
            Operator = target;
            screen.textContent += ` ${Operator} `;
            isDone = true;
            operatorClicked = true;
            console.log({ Operator });
        }



    } else if (special.includes(target)) {

        if (target === 'AC') {
            firstNumber = '';
            secondNumber = '';
            screen.textContent = '0';
            CE.textContent = 'C';
            isDone = false;


        } else if (target === 'remove') {
            if (isDone) {
                secondNumber = secondNumber.split('').slice(0, -1).join('');
                screen.textContent = screen.textContent.split('').slice(0, -1).join('');
            } else {
                firstNumber = firstNumber.split('').slice(0, -1).join('');
                screen.textContent = firstNumber;
            }

            console.log({ target });
            console.log({ firstNumber });
            console.log({ secondNumber });
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
    }else return;
    

}


let firstNumber = '';
let secondNumber = '';
let Operator = '';
let operated = false;
let result = 0;
let isDone = false;
let operatorClicked = false;
let CEClicked = false;
let previousFirstNumber = '';
let previousSecondNumber = '';
let previousOperator = '';
const PI = 3.1415926536;
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operators = ['+', '-', '*', '/', 'pow'];
const special = ['AC', 'root', 'PI', 'remove']

const CE = document.querySelector('#AC');
const screen = document.querySelector('#screen');
screen.textContent = '0';
const buttons = document.querySelector('#buttons');

buttons.addEventListener('click', function (event) {
    let target = event.target.id;

    if (screen.textContent !== '') {
        CE.textContent = 'CE';
    } else {
        CE.textContent = 'C';
    }
    input(target);

})