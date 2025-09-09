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
        if (result !== '') {
            result = '';
            firstNumber = '';
            secondNumber = '';
            Operator = '';
            isDone = false;
            firstDot = false;
            secondDot = false;
            upperText.textContent = '';
        }
        if (isDone) {
            secondNumber += entry;
            lowerText.textContent = secondNumber;
            operatorClicked = false;
        } else {
            firstNumber += entry;
            lowerText.textContent = firstNumber;
        }

    } else if (operators.includes(target)) {
        console.log('Operator: ', { firstNumber });
        console.log('Operator: ', { secondNumber });

        if (result !== '') {
            firstNumber = parseFloat(lowerText.textContent);
            firstDot = false;
            secondDot = false;
            result = '';
            console.log('When result is not empty ', { firstNumber });
        }
        if (firstNumber !== '' && secondNumber !== '') {
            let screenResult = operate(Operator, parseFloat(firstNumber), parseFloat(secondNumber));
            firstNumber = screenResult;
            firstDot = false;
            secondDot = false;
            lowerText.textContent = secondNumber;
        }

        if (operatorClicked === true) {
            Operator = target;
            upperText.textContent = upperText.textContent.split('').slice(0, -2).join('') + ` ${Operator} `;
            console.log(`Operator clicked: ${Operator}`);
        } else {
            Operator = target;
            upperText.textContent = firstNumber + ` ${Operator} `;
            lowerText.textContent = firstNumber;
            isDone = true;
            operatorClicked = true;
            console.log('Opeartor Not clicked', { Operator });
        }



    } else if (special.includes(target)) {

        if (target === 'AC') {
            firstNumber = '';
            secondNumber = '';
            Operator = '';
            operatorClicked = false;
            upperText.textContent = '';
            lowerText.textContent = '0';
            CE.textContent = 'C';
            isDone = false;
            firstDot = false;
            secondDot = false;


        } else if (target === 'remove') {
            if (!isDone) {
                firstNumber = firstNumber.slice(0, -1);
                if (firstNumber === '') {
                    lowerText.textContent = '0';
                } else {
                    lowerText.textContent = firstNumber;
                }
            } else {

                secondNumber = secondNumber.slice(0, -1);
                if (secondNumber === '') {
                    lowerText.textContent = '0';
                } else {
                    lowerText.textContent = secondNumber;
                }
            }
            if (!firstNumber.includes('.')) firstDot = false;
            if (!secondNumber.includes('.')) secondDot = false;

            if (firstNumber === '' && secondNumber === '') {
                Operator = '';
                operatorClicked = false;
                isDone = false;
            }

            lowerText.textContent = lowerText.textContent || '0';

            upperText.textContent = '';

            console.log('Remove pressed', { firstNumber, secondNumber });

        } else if (target === 'dot') {
            if (isDone && !secondDot) {
                secondNumber += '.';
                lowerText.textContent += '.';
                secondDot = true;
                console.log(`Dot secondNumber : ${secondNumber}`);
            } else if (!isDone && !firstDot) {
                firstNumber += '.';
                lowerText.textContent = firstNumber;
                firstDot = true;
                console.log(`Screen : ${screen.textContent}`);
                console.log(`Dot firstNumber : ${firstNumber}`);
            }
        } else if (target === 'root') {
            console.log({ result });

            if (result !== '' && !isNaN(result)) {
                firstNumber = result;
                isDone = false;
                operatorClicked = false;
            }

            if (isDone) {
                console.log('secondNumber before', secondNumber);
                let rootResultSecond = (parseFloat(secondNumber) >= 0) ? Math.sqrt(parseFloat(secondNumber)) : 0;
                upperText.textContent += `√${secondNumber}`;
                if (typeof rootResultSecond === 'number' && !Number.isInteger(rootResultSecond)) {
                    secondNumber = rootResultSecond.toFixed(5);
                } else {
                    secondNumber = rootResultSecond;
                }
                console.log('Sqrt  secondNumber : ', secondNumber);
            } else {
                console.log('firstNumber before', firstNumber);
                operatorClicked = false;
                upperText.textContent = `√${firstNumber}`;
                let rootResult = (parseFloat(firstNumber) >= 0) ? Math.sqrt(parseFloat(firstNumber)) : 0;
                if (typeof rootResult === 'number' && !Number.isInteger(rootResult)) {
                    firstNumber = rootResult.toFixed(5);
                } else {
                    firstNumber = rootResult;
                }
                lowerText.textContent = firstNumber
                console.log('sqrt firstNumber : ', firstNumber);
            }

        } else if (target === 'percent') {
            if (!isDone) {
                if (firstNumber !== '' && !isNaN(firstNumber)) {
                    let pprevious =firstNumber;
                    let percentValue = parseFloat(firstNumber) / 100;
                    firstNumber = percentValue.toString();
                    lowerText.textContent = pprevious + '%';
                }
            } else {
                if (secondNumber !== '' && !isNaN(secondNumber)) {
                    let previous  = secondNumber;
                    let percentValue = parseFloat(secondNumber) / 100;
                    secondNumber = percentValue.toString();
                    lowerText.textContent = previous + '%';
                }
            }
        }
        else if (target === 'PI') {

            if (!isDone) {
                firstNumber = PI.toString();
                lowerText.textContent = 'π';
                upperText.textContent = firstNumber;
            } else {
                secondNumber = PI.toString();
                lowerText.textContent = 'π';
                upperText.textContent = `${firstNumber} ${Operator} π`;
            }
        }
        else if (target === 'E') {

            if (!isDone) {
                firstNumber = E.toString();
                lowerText.textContent = 'e';
                upperText.textContent = firstNumber;
            } else {
                secondNumber = E.toString();
                lowerText.textContent = 'e';
                upperText.textContent = `${firstNumber} ${Operator} e`;
            }

        }
        else if (target === 'plusMinus') {
            if (!isDone) {
                if (firstNumber.startsWith('-')) {
                    firstNumber = firstNumber.slice(1);
                } else if (firstNumber !== '' && firstNumber !== '0') {
                    firstNumber = '-' + firstNumber;
                }
                lowerText.textContent = firstNumber || '0';
            } else {
                if (secondNumber.startsWith('-')) {
                    secondNumber = secondNumber.slice(1);
                } else if (secondNumber !== '' && secondNumber !== '0') {
                    secondNumber = '-' + secondNumber;
                }
                lowerText.textContent = secondNumber || '0';
            }
        }

    } else if (target === 'equality') {

        if (firstNumber === '' && result !== '') {
            firstNumber = previousFirstNumber;
            Operator = previousOperator;
            secondNumber = previousSecondNumber;
        }
        result = operate(Operator, parseFloat(firstNumber), parseFloat(secondNumber));
        upperText.textContent = `${firstNumber} ${Operator} ${secondNumber} =`
        lowerText.textContent = result;
        console.log({ firstNumber }, { secondNumber });
        console.log('Opeartor clicked result : ', { result });


        previousFirstNumber = result;
        previousSecondNumber = secondNumber;
        previousOperator = Operator;


        firstNumber = '';
        secondNumber = '';
        Operator = '';
        isDone = false;
        firstDot = false;
        isPlusMinusFirst = false;
        isPlusMinusSecond = false;
        secondDot = false;
    }

}


let firstNumber = '';
let secondNumber = '';
let Operator = '';
let operated = false;
let result = '';
let firstDot = false;
let secondDot = false;
let isPlusMinusFirst = false;
let isPlusMinusSecond = false;
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
const upperText = document.querySelector('#upperText');
const lowerText = document.querySelector('#lowerText');
const buttons = document.querySelector('#buttons');

lowerText.textContent = '0';
upperText.textContent = '';

buttons.addEventListener('click', function (event) {
    const btn = event.target.closest('button');
    if(!btn) return;

    let target = btn.id;


    if (screen.textContent !== '') {
        CE.textContent = 'CE';
    } else {
        CE.textContent = 'C';
    }

    input(target);

})