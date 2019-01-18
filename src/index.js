import readlineSync from 'readline-sync';

import { car, cdr } from 'hexlet-pairs';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName} !`);
  return userName;
};

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getQuestion = pair => car(pair);
const getAnswer = pair => cdr(pair);

export const gameEngine = (gameRuleExplanation, createQuestionAnswer) => {
  greeting();
  console.log(gameRuleExplanation);
  console.log();

  const userName = getUserName();
  console.log();

  const attempts = 3;
  for (let i = 1; i <= attempts; i += 1) {
    const questionAnswerPair = createQuestionAnswer();
    const question = getQuestion(questionAnswerPair);
    const answer = getAnswer(questionAnswerPair);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
