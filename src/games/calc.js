import gameEngine from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const operationArr = ['+', '-', '*'];

const getRandomOperator = () => operationArr[getRandomNumber(0, operationArr.length - 1)];

const calculate = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default: return number1 * number2;
  }
};

const qustionAnswerCreator = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operator = getRandomOperator();

  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculate(number1, operator, number2));

  return cons(question, answer);
};

const description = 'What is the result of the expression?';

export default () => gameEngine(description, qustionAnswerCreator);
