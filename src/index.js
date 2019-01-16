import readlineSync from 'readline-sync';

export const sayHi = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName} !`);
  return userName;
};

const getRandomNumber = () => {
  const min = 0;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isEven = number => (number % 2 === 0 ? 'yes' : 'no');

export const parityCheckGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName} !`);

  let attempts = 0;
  for (let i = 1; i <= 3; i += 1) {
    attempts = i;

    const generatedNumber = getRandomNumber();
    console.log(`Question: ${generatedNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (isEven(generatedNumber) !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(generatedNumber)}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
    }
  }

  if (attempts === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
