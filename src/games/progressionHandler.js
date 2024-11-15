import _ from 'lodash';
import app from '../index.js';
import getRandomNumber from '../utils.js';

const generateProgression = (length = 10) => {
  const start = getRandomNumber(10);
  const step = getRandomNumber(6);
  const arr = Array(length).fill(0);
  return arr.map((_elem, index) => start + (step * index));
};

const hideElement = (progression) => {
  const progressionCopy = _.clone(progression);
  const lastIndex = progressionCopy.length - 1;
  const indexToHide = getRandomNumber(lastIndex);
  const hiddenElement = progressionCopy[indexToHide].toString();
  progressionCopy[indexToHide] = '..';
  const maskedProgression = progressionCopy.toString().replaceAll(',', ' ');
  return { hiddenElement, maskedProgression };
};

const gameTask = 'What number is missing in the progression?';

const progressionHandler = () => {
  const {
    hiddenElement: correctAnswer,
    maskedProgression: riddle,
  } = hideElement(generateProgression());
  return { riddle, correctAnswer };
};

export default () => {
  app(progressionHandler, gameTask);
};
