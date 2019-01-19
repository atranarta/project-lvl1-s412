const getArithmeticProgression = (n, k) => {
  const ArithmeticProgression = [];
  ArithmeticProgression.push(n);
  let lastItem = n;

  for (let i = 1; i < 10; i++) {
    lastItem = lastItem + k;
    ArithmeticProgression.push(lastItem);
  }
  return ArithmeticProgression;
}

const arr = getArithmeticProgression(5, 3);
console.log("arr:", arr);

const getRandomElement = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getIndexOfRandomElement = n => {
  return Math.floor(Math.random() * (arr.length - 1));
}
const index = Math.floor(Math.random() * (arr.length - 1));
console.log("index:", index);

const number = arr[index];
console.log("number:", number);
arr[index] = '..';
console.log("arr:", arr);
const arrToString = String(arr).replace(/,/g, ' ');
console.log("arrToString:", arrToString);

const question = arrToString;
console.log("question:", question);
const answer = String(number);
console.log("answer:", answer);
