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
    let result;
    switch (Operator) {
        case '+': result = add(firstNumber, secondNumber); break;
        case '-': result = subtract(firstNumber, secondNumber); break;
        case '*': result = multiply(firstNumber, secondNumber); break;
        case '/': result = divide(firstNumber, secondNumber); break;
        case 'pow': result = Math.pow(firstNumber, secondNumber); break;
        default: result = 'Invalid Syntax...'; break;
    }
    if (typeof result === 'number' && !Number.isInteger(result)) {
        return result.toFixed(2);
    } else {
        return result;
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
            console.log(`Number input screen: ${screen.textContent}`);
            screen.textContent = firstNumber;
        }

        console.log('Number input ', { firstNumber });
        console.log('Number input', { secondNumber });

    } else if (operators.includes(target)) {
        console.log('Operator: ', { firstNumber });
        console.log('Operator: ', { secondNumber });

        if (result !== '') {
            firstNumber = parseFloat(screen.textContent);
            firstDot = false;
            secondDot = false;
            console.log('When result is not empty ', { firstNumber });
        }
        if (firstNumber !== '' && secondNumber !== '') {
            firstNumber = operate(Operator, parseFloat(firstNumber), parseFloat(secondNumber));
            secondNumber = '';
            firstDot = false;
            secondDot = false;
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
            console.log('Opeartor Not clicked', { Operator });
        }



    } else if (special.includes(target)) {

        if (target === 'AC') {
            firstNumber = '';
            secondNumber = '';
            screen.textContent = '0';
            CE.textContent = 'C';
            isDone = false;
            firstDot = false;
            secondDot = false;

        } else if (target === 'remove') {

            if (screen.textContent === '') {
                firstNumber = '';
                secondNumber = '';
                Operator = '';
                isDone = false;
                secondDot = false;
                firstDot = false;
                operatorClicked = false;
            }
            if (isDone) {
                secondNumber = secondNumber.split('').slice(0, -1).join('');
                screen.textContent = screen.textContent.split('').slice(0, -1).join('');
            } else {
                firstNumber = firstNumber.split('').slice(0, -1).join('');
                screen.textContent = firstNumber;
            }

            console.log('Special', { target });
            console.log('Remove First', { firstNumber });
            console.log('Remove Second', { secondNumber });

        } else if (target === 'dot') {
            if (isDone && !secondDot) {
                secondNumber += '.';
                screen.textContent += '.';
                secondDot = true;
                console.log(`Dot secondNumber : ${secondNumber}`);
            } else if (!isDone && !firstDot) {
                firstNumber += '.';
                screen.textContent = firstNumber;
                firstDot = true;
                console.log(`Screen : ${screen.textContent}`);
                console.log(`Dot firstNumber : ${firstNumber}`);
            }
        } else if (target === 'root') {
            console.log({ result });

            if (result !== 0) {
                firstNumber = result;
                isDone = false;
                operatorClicked = false;
            }

            if (isDone) {
                console.log('secondNumber before', secondNumber);
                let rootResultSecond = (parseFloat(secondNumber) >= 0) ? Math.sqrt(parseFloat(secondNumber)) : 0;
                if (typeof rootResultSecond === 'number' && !Number.isInteger(rootResultSecond)) {
                    secondNumber = rootResultSecond.toFixed(5);
                } else {
                    secondNumber = rootResultSecond;
                }
                screen.textContent = screen.textContent.split('').slice(0, -1).join('') + secondNumber;
                console.log('Sqrt  secondNumber : ', secondNumber);
            } else {
                console.log('firstNumber before', firstNumber);
                operatorClicked = false;
                let rootResult = (parseFloat(firstNumber) >= 0) ? Math.sqrt(parseFloat(firstNumber)) : 0;
                if (typeof rootResult === 'number' && !Number.isInteger(rootResult)) {
                    firstNumber = rootResult.toFixed(5);
                } else {
                    firstNumber = rootResult;
                }
                screen.textContent = firstNumber;
                console.log('sqrt firstNumber : ', firstNumber);
            }

        } else if (target === 'percent') {
            console.log({ result });

            if (result !== 0) {
                firstNumber = result;
                isDone = false;
                operatorClicked = false;
            }

            if (isDone) {
                console.log('secondNumber before percent', secondNumber);
                let rootResultSecond = (parseFloat(secondNumber) >= 0) ? parseFloat(secondNumber) / 100 : 0;
                if (typeof rootResultSecond === 'number' && !Number.isInteger(rootResultSecond)) {
                    secondNumber = rootResultSecond.toFixed(2);
                } else {
                    secondNumber = rootResultSecond;
                }
                screen.textContent = screen.textContent.split('').slice(0, -1).join('') + secondNumber;
                console.log(' percent secondNumber : ', secondNumber);
            } else {
                console.log('firstNumber before percent', firstNumber);
                let rootResult = (parseFloat(firstNumber) >= 0) ? parseFloat(firstNumber) / 100 : 0;
                operatorClicked = false;
                if (typeof rootResult === 'number' && !Number.isInteger(rootResult)) {
                    firstNumber = rootResult.toFixed(2);
                } else {
                    firstNumber = rootResult;
                }
                screen.textContent = firstNumber;
                console.log('percent firstNumber : ', firstNumber);
            }
            firstNumber = '';
            secondNumber = '';
            Operator = '';
            isDone = false;

        }
        else if (target === 'PI') {

            if (isDone) {
                secondNumber = PI;
                screen.textContent += PI;
                operatorClicked = false;
            } else {
                firstNumber = PI;
                console.log(`PI input screen: ${screen.textContent}`);
                screen.textContent = firstNumber;
            }
            firstNumber = '';
            secondNumber = '';
            Operator = '';
            isDone = false;

        }
        else if (target === 'E') {

            if (isDone) {
                secondNumber = E;
                screen.textContent += E;
                operatorClicked = false;
            } else {
                firstNumber = E;
                console.log(`E input screen: ${screen.textContent}`);
                screen.textContent = firstNumber;
            }
            firstNumber = '';
            secondNumber = '';
            Operator = '';
            isDone = false;

        }

    } else if (target === 'equality') {
        result = operate(Operator, parseFloat(firstNumber), parseFloat(secondNumber));
        screen.textContent = result;
        console.log('Opeartor clicked result : ', { result });

        previousFirstNumber = result;
        previousSecondNumber = secondNumber;
        previousOperator = Operator;

        firstNumber = '';
        secondNumber = '';
        Operator = '';
        isDone = false;
        firstDot = false;
        secondDot = false;

    } else return;


}

let firstNumber = '';
let secondNumber = '';
let Operator = '';
let operated = false;
let result = 0;
let firstDot = false;
let secondDot = false;
let isDone = false;
let operatorClicked = false;
let CEClicked = false;
let previousFirstNumber = '';
let previousSecondNumber = '';
let previousOperator = '';
const E = 2.71;
const PI = 3.1415926536;
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operators = ['+', '-', '*', '/', 'pow'];
const special = ['AC', 'root', 'PI', 'remove', 'dot', 'percent', 'E', 'plusMinus'];

const CE = document.querySelector('#AC');
const screen = document.querySelector('#screen');
screen.textContent = '0';
const buttons = document.querySelector('#buttons');

buttons.addEventListener('click', function (event) {
    let target = event.target.id;

    console.log({ target });

    if (screen.textContent !== '') {
        CE.textContent = 'CE';
    } else {
        CE.textContent = 'C';
    }

    input(target);

})