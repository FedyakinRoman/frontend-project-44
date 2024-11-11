import { generateProgression, hideElement } from '../utils.js';

export default () => {
  const {
    hiddenElement: correctAnswer,
    maskedProgression: riddle,
  } = hideElement(generateProgression());
  return { riddle, correctAnswer };
};
