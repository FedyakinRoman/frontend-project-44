import app from '../../index.js';
import getRandomNumber from '../utils.js';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const gameTask = 'Find the greatest common divisor of given numbers.';

const gcdHandler = () => {
  const first = getRandomNumber(25);
  const second = getRandomNumber(25);

  const riddle = `${first} ${second}`;
  const correctAnswer = `${gcd(first, second)}`;

  return { riddle, correctAnswer };
};

export default () => {
  app(gcdHandler, gameTask);
};
