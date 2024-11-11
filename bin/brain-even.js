#!/usr/bin/env node

import askName from '../src/cli.js';
import { ask } from '../src/utils.js';

console.log('Welcome to the Brain Games!');
const userName = askName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const rounds = 3;
let score = 0;

for (let i = 0; i < rounds; i += 1) {
  const { answer, rightAnswer } = ask();
  if (answer !== rightAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
  console.log('Correct!');
  score += 1;
}

if (score === rounds) {
  console.log(`Congratulations, ${userName}!`);
}
