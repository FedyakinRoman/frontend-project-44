#!/usr/bin/env node

import readlineSync from 'readline-sync';
import askName from '../../src/cli.js';
import { question as ask } from '../../src/utils.js';

console.log('Welcome to the Brain Games!');
const userName = askName();
console.log('What number is missing in the progression?');
const rounds = 3;
let score = 0;

for (let i = 0; i < rounds; i += 1) {
  const { riddle, correctAnswer } = ask('progression');
  console.log(`Question: ${riddle}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer !== correctAnswer) {
    console.log(`Let's try again, ${userName}!`);
    break;
  }
  console.log('Correct!');
  score += 1;
}

if (score === rounds) {
  console.log(`Congratulations, ${userName}!`);
}
