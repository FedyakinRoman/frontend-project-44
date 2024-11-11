import readlineSync from 'readline-sync';
import { question as ask } from './src/utils.js';
import askName from './src/cli.js';

const app = (gameName, gameTask = '', rounds = 3) => {
  console.log('Welcome to the Brain Games!');
  const userName = askName();
  if (gameName === 'justHello') {
    return;
  }
  console.log(gameTask);

  let score = 0;

  for (let i = 0; i < rounds; i += 1) {
    const { riddle, correctAnswer } = ask(gameName);
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
};

export default app;
