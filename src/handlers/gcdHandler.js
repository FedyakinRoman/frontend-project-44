import { gcd, getRandomNumber } from '../utils.js';

export default () => {
  const first = getRandomNumber(25);
  const second = getRandomNumber(25);

  const riddle = `${first} ${second}`;
  const correctAnswer = `${gcd(first, second)}`;

  return { riddle, correctAnswer };
};
