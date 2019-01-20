import { gameEngine } from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let divider = 2; divider * divider <= number; divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }

  return true;
};

const getCorrectAnswer = number => (isPrime(number) ? 'yes' : 'no');

const qustionAnswerCreator = () => {
  const question = getRandomNumber(1, 100);
  const answer = getCorrectAnswer(question);

  return cons(question, answer);
};

const description = 'Answer "yes" if number even otherwise answer "no".';

export default () => gameEngine(description, qustionAnswerCreator);

