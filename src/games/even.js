import gameEngine from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const isEven = number => (number % 2 === 0);

const getCorrectAnswer = number => (isEven(number) ? 'yes' : 'no');

const qustionAnswerCreator = () => {
  const question = getRandomNumber(1, 100);
  const answer = getCorrectAnswer(question);

  return cons(question, answer);
};

const description = 'Answer "yes" if number even otherwise answer "no".';

export default () => gameEngine(description, qustionAnswerCreator);
