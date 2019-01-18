import readlineSync from 'readline-sync';
import { greeting, getUserName, getRandomNumber } from '..';

const isEven = number => (number % 2 === 0);

const getCorrectAnswer = number => (isEven(number) ? 'yes' : 'no');

export default function () {
  greeting();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = getUserName();

  const attempts = 3;
  for (let i = 1; i <= attempts; i += 1) {
    const question = getRandomNumber(1, 100);
    const correctAnswer = getCorrectAnswer(question);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
