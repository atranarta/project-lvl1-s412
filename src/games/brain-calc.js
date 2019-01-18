import readlineSync from 'readline-sync';
import { greeting, getUserName, getRandomNumber } from '..';

const result = (number1, number2, operator) => {
  if (operator === '-') {
    return (number1 - number2);
  }
  if (operator === '+') {
    return (number1 + number2);
  }
  if (operator === '*') {
    return (number1 * number2);
  }
};

export default function () {
  greeting();
  console.log('What is the result of the expression?');

  const userName = getUserName();

  const attempts = 3;

  for (let i = 1; i <= attempts; i += 1) {
    const getRandomOper = () => {
      const operationArr = [
        '+',
        '-',
        '*',
      ];
      return operationArr[Math.floor(operationArr.length * Math.random())];
    };

    const number1 = getRandomNumber(1, 10);
    const number2 = getRandomNumber(1, 10);
    const operator = getRandomOper();

    console.log(`Question: ${number1} ${operator} ${number2}`);

    const correctAnswer = String(result(number1, number2, operator));
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
