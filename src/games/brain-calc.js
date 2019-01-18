import { getRandomNumber, gameEngine } from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const getRandomOperator = () => {
  const operationArr = [
    '+',
    '-',
    '*',
  ];
  return operationArr[Math.floor(operationArr.length * Math.random())];
};

const calculate = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
  }

  return NaN;
};

const qustionAnswerCreator = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operator = getRandomOperator();

  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculate(number1, operator, number2));

  return cons(question, answer);
};

export default () => {
  const gameRuleExplanation = 'What is the result of the expression?';

  gameEngine(
    gameRuleExplanation,
    qustionAnswerCreator,
  );
}
