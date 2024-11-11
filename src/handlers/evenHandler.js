import {getRandomNumber, isEven} from "../utils.js";

const evenHandler = () => {
  const riddle = getRandomNumber();
  const correctAnswer = isEven(riddle) ? 'yes' : 'no';
  return { riddle, correctAnswer };
};

export default evenHandler;