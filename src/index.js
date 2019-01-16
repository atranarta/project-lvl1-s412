import readlineSync from 'readline-sync';

export const sayHi = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName} !`);
  return userName;
};

export const isEven = () => {
  sayHi();

  const randomInteger = () => {
    const min = 0;
    const max = 100;
    let rand = min - 0.5 + Math.random() * (max - 0 + 1);
    rand = Math.round(rand);
    return rand;
  };

  const asker = () => {
    console.log(`Question: ${randomInteger}`);
    const answer = readlineSync.question('Your answer: ');
    return answer;
  };

  const checkAnswer = (number, answer, name) => {
    const correct = () => {
      console.log('Correct!');
      asker();
    };
    const wrong = () => {
      console.log('Answer "yes" if number even otherwise answer "no"./n');
      console.log(`Let's try again, ${name} !`);
    };

    for (let i = 0; i < 3; i += 1) {
      if (number % 2 === 0) {
        if (answer === 'yes') {
          correct();
        } else {
          wrong();
        }
      } else if (answer === 'yes') {
        wrong();
      } else {
        correct();
      }
    }
    console.log(`Congratulations, ${name} !`);
  };
  checkAnswer(randomInteger, asker, userName);
};
