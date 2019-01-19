import { gameEngine } from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const lengthOfProgression = 10;
const startOfProgression = 5;
const stepOfProgression = 3;
const hiddenNumberPlaceholder = '..';

const getArithmeticProgression = (start, step, length) => {
  const arithmeticProgression = [];
  arithmeticProgression.push(start);
  let currentNumber = start;

  for (let i = 1; i < length; i += 1) {
    currentNumber += step;
    arithmeticProgression.push(currentNumber);
  }
  return arithmeticProgression;
};

const qustionAnswerCreator = () => {
  const progression = getArithmeticProgression(
    startOfProgression,
    stepOfProgression,
    lengthOfProgression,
  );
  const indexOfNumber = getRandomNumber(0, (progression.length - 1));
  const valueOfHiddenNumber = progression[indexOfNumber];
  progression[indexOfNumber] = hiddenNumberPlaceholder;

  const question = String(progression).replace(/,/g, ' ');
  const answer = String(valueOfHiddenNumber);
  return cons(question, answer);
};

const description = 'What number is missing in the progression?';

export default () => {
  gameEngine(
    description,
    qustionAnswerCreator,
  );
};
