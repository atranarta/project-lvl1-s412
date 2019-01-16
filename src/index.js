import readlineSync from 'readline-sync';

export const sayHi = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName} !`);
  return userName;
};

export const parityCheckGame = () => {
  console.log('Welcome to the Brain Games!');
  const rules = console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName} !`);

  const randomInteger = () => {
    const min = 0;
    const max = 100;
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
  };

  let randomNumber = randomInteger();

  const asker = () => {
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    return answer;
  };

  const checkAnswer = (number, answer, name) => {
    const correct = () => {
      console.log('Correct!');
      asker();
    };
    const wrong = () => {
      rules;
      console.log(`Let's try again, ${name} !`);
    };

    for (let i = 1; i < 3; i += 1) {
      if (number % 2 === 0) {
        if (answer === 'yes') {
          correct();
          randomNumber;
        } else {
          wrong();
        }
      } else if (answer === 'yes') {
        wrong();
      } else {
        correct();
        randomNumber;
      }
    }
    console.log(`Congratulations, ${name} !`);
  };
  checkAnswer(randomInteger, asker(), userName);
};
//   const randomInteger = () => {
//     const min = 0;
//     const max = 100;
//     let rand = min - 0.5 + Math.random() * (max - 0 + 1);
//     rand = Math.round(rand);
//     return rand;
//   };

//   const randomNumber = randomInteger();

//   const asker = () => {
//     console.log(`Question: ${randomNumber}`);
//     const answer = readlineSync.question('Your answer: ');
//     return answer;
//   };

//   const checkAnswer = (number, answer, name) => {
//     const correct = () => {
//       console.log('Correct!');
//       asker();
//     };
//     const wrong = () => {
//       rules;
//       console.log(`Let's try again, ${name} !`);
//     };

//     for (let i = 1; i < 3; i += 1) {
//       if (number % 2 === 0) {
//         if (answer === 'yes') {
//           correct();
//           randomNumber;
//         } else {
//           wrong();
//         }
//       } else if (answer === 'yes') {
//         wrong();
//       } else {
//         correct();
//         randomNumber;
//       }
//     }
//     console.log(`Congratulations, ${name} !`);
//   };
//   checkAnswer(randomInteger, asker(), userName);
// };
