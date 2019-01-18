import { getRandomNumber, gameEngine } from '..';

import { cons } from 'hexlet-pairs';

const getRandomOperator = () => {
  const operationArr = [
    '+',
    '-',
    '*',
  ];
  return operationArr[Math.floor(operationArr.length * Math.random())];
};

const calculate = (number1, operator, number2) => {
  if (operator === '+') {
    return number1 + number2;
  }
  if (operator === '-') {
    return number1 - number2;
  }
  if (operator === '*') {
    return number1 * number2;
  }

  return NaN;
};

export default function () {
  const qustionAnswerCreator = () => {
    const number1 = getRandomNumber(1, 10);
    const number2 = getRandomNumber(1, 10);
    const operator = getRandomOperator();

    const question = `${number1} ${operator} ${number2}`;
    const answer = String(calculate(number1, operator, number2));

    return cons(question, answer);
  };

  gameEngine(
    'What is the result of the expression?',
    qustionAnswerCreator,
  );
}
