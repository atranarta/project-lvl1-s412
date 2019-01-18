import { getRandomNumber, gameEngine } from '..';

import { cons } from 'hexlet-pairs';

const isEven = number => (number % 2 === 0);

const getCorrectAnswer = number => (isEven(number) ? 'yes' : 'no');

export default function () {
  const qustionAnswerCreator = () => {
    const question = getRandomNumber(1, 100);
    const answer = getCorrectAnswer(question);

    return cons(question, answer);
  };

  gameEngine(
    'Answer "yes" if number even otherwise answer "no".',
    qustionAnswerCreator,
  );
}
