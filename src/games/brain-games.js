const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName} !`);
  return userName;
};

export default () => {
  greeting();
  getUserName();
};
