import _ from 'lodash';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRandomOperation = () => _.sample(Object.keys(operations));

const getRandomNumber = (max = 100) => Math.floor(Math.random() * max);

const isEven = (number) => (number % 2 === 0);

const isPrime = (num) => {
  let divisor = 1;
  const endOfCheck = Math.sqrt(num);
  while (divisor < endOfCheck) {
    divisor += 1;
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

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

export {
  isEven,
  isPrime,
  getRandomNumber,
  getRandomOperation,
  operations,
  gcd,
  generateProgression,
  hideElement,
};
