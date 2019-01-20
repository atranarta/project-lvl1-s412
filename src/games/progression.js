import { gameEngine } from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const lengthOfProgression = 10;
const hiddenNumberPlaceholder = '..';

const getArithmeticProgression = (start, step, length) => {
  const arithmeticProgression = [];

  for (let i = 0; i < length; i += 1) {
    let currentNumber = start + step * i;
    arithmeticProgression.push(currentNumber);
  }
  return arithmeticProgression;
};

const qustionAnswerCreator = () => {
  const startOfProgression = getRandomNumber(0, 10);
  const stepOfProgression = getRandomNumber(0, 10);

  const progression = getArithmeticProgression(
    startOfProgression,
    stepOfProgression,
    lengthOfProgression,
  );
  const indexOfNumber = getRandomNumber(0, (progression.length - 1));
  const valueOfHiddenNumber = progression[indexOfNumber];
  progression[indexOfNumber] = hiddenNumberPlaceholder;

  const question = progression.join(' ');
  const answer = String(valueOfHiddenNumber);
  return cons(question, answer);
};

const description = 'What number is missing in the progression?';

export default () => gameEngine(description, qustionAnswerCreator);

