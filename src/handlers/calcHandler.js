import _ from 'lodash';
import app from '../../index.js';
import getRandomNumber from '../utils.js';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRandomOperation = () => _.sample(Object.keys(operations));

const gameTask = 'What is the result of the expression?';

const calcHandler = () => {
  const first = getRandomNumber(10);
  const second = getRandomNumber(10);
  const operation = getRandomOperation();

  const riddle = `${first} ${operation} ${second}`;
  const correctAnswer = `${operations[operation](first, second)}`;
  return { riddle, correctAnswer };
};

export default () => {
  app(calcHandler, gameTask);
};
