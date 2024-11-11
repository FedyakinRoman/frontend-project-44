import { getRandomNumber, getRandomOperation, operations } from '../utils.js';

export default () => {
  const first = getRandomNumber(10);
  const second = getRandomNumber(10);
  const operation = getRandomOperation();

  const riddle = `${first} ${operation} ${second}`;
  const correctAnswer = `${operations[operation](first, second)}`;
  return { riddle, correctAnswer };
};
