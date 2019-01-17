import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName} !`);
  return userName;
};

const getRandomNumber = () => {
  const min = 0;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkAnswer = number => (number % 2 === 0 ? 'yes' : 'no');

export const sayHi = () => {
  greeting();
  getUserName();
};

export const parityCheckGame = () => {
  greeting();
  console.log('Answer "yes" if number even otherwise answer "no".');

  const userName = getUserName();

  const attempts = 3;
  for (let i = 1; i <= attempts; i += 1) {
    const question = getRandomNumber();
    const correctAnswer = checkAnswer(question);
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
};


export const calculationGame = () => {
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

    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const operator = getRandomOper();

    const result = (a, b, op) => {
      a = number1;
      b = number2;
      op = operator;
      if (op === '-') {
        return (a - b);
      }
      if (op === '+') {
        return (a + b);
      }
      if (op === '*') {
        return (a * b);
      }
    };
    console.log(`Question: ${number1} ${operator} ${number2}`);

    const correctAnswer = String(result());
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
