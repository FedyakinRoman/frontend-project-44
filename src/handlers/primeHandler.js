import { getRandomNumber, isPrime } from '../utils.js';

export default () => {
  const riddle = getRandomNumber();
  const correctAnswer = isPrime(riddle) ? 'yes' : 'no';
  return { riddle, correctAnswer };
};
