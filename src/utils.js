import readlineSync from 'readline-sync';

const getRandomNumber = (max = 100) => Math.floor(Math.random() * max);
const isEven = (number) => (number % 2 === 0);
const ask = () => {
  const randomNumber = getRandomNumber();
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  return { answer, rightAnswer };
};

export { isEven, getRandomNumber, ask };
