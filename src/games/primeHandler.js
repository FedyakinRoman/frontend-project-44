import app from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (num) => {
  let divisor = 1;
  const endOfCheck = Math.sqrt(num);
  while (divisor < endOfCheck) {
    divisor += 1;
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeHandler = () => {
  const riddle = getRandomNumber();
  const correctAnswer = isPrime(riddle) ? 'yes' : 'no';
  return { riddle, correctAnswer };
};

export default () => {
  app(primeHandler, gameTask);
};
