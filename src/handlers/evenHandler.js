import app from '../../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenHandler = () => {
  const riddle = getRandomNumber();
  const correctAnswer = isEven(riddle) ? 'yes' : 'no';
  return { riddle, correctAnswer };
};

export default () => {
  app(evenHandler, gameTask);
};
