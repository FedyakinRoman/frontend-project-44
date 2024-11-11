import _ from 'lodash';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRandomOperation = () => _.sample(Object.keys(operations));
const getRandomNumber = (max = 100) => Math.floor(Math.random() * max);
const isEven = (number) => (number % 2 === 0);
const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};
const generateProgression = (length = 10) => {
  const start = getRandomNumber(10);
  const step = getRandomNumber(6);
  // console.log(start, step);
  const arr = Array(length).fill(0);
  return arr.map((_elem, index) => start + (step * index));
};
const hideElement = (progression) => {
  const progressionCopy = _.cloneDeep(progression);
  const lastIndex = progressionCopy.length - 1;
  const indexToHide = getRandomNumber(lastIndex);
  const hiddenElement = progressionCopy[indexToHide].toString();
  progressionCopy[indexToHide] = '..';
  const maskedProgression = progressionCopy.toString().replaceAll(',', ' ');
  return { hiddenElement, maskedProgression };
};
// console.log(hideElement(generateProgression()))

const question = (game) => {
  let riddle;
  let correctAnswer;

  switch (game) {
    case 'even': {
      riddle = getRandomNumber();
      correctAnswer = isEven(riddle) ? 'yes' : 'no';
      break;
    }
    case 'calc': {
      const first = getRandomNumber(10);
      const second = getRandomNumber(10);
      const operation = getRandomOperation();

      riddle = `${first} ${operation} ${second}`;
      correctAnswer = `${operations[operation](first, second)}`;
      break;
    }
    case 'gcd': {
      const first = getRandomNumber(25);
      const second = getRandomNumber(25);

      riddle = `${first} ${second}`;
      correctAnswer = `${gcd(first, second)}`;
      break;
    }
    case 'progression': {
      const { hiddenElement, maskedProgression } = hideElement(generateProgression());
      riddle = maskedProgression;
      correctAnswer = hiddenElement;
      break;
    }
    default: break;
  }

  return { riddle, correctAnswer };
};

export { isEven, getRandomNumber, question };
