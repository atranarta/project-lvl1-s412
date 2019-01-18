import { gameEngine } from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const getGCD = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return getGCD(number2, number1 % number2);
};

const qustionAnswerCreator = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const question = `${number1} ${number2}`;
  const answer = String(getGCD(number1, number2));
  return cons(question, answer);
};

export default () => {
  const gameRuleExplanation = 'Find the greatest common divisor of given numbers.';

  gameEngine(
    gameRuleExplanation,
    qustionAnswerCreator,
  );
};
