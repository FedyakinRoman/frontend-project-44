import { getRandomNumber, isEven } from '../utils.js';

export default () => {
  const riddle = getRandomNumber();
  const correctAnswer = isEven(riddle) ? 'yes' : 'no';
  return { riddle, correctAnswer };
};
