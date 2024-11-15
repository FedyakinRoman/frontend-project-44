import readlineSync from 'readline-sync';
import askName from './cli.js';

const app = (gameHandler = null, gameTask = '', rounds = 3) => {
  console.log('Welcome to the Brain Games!');
  const userName = askName();
  if (!gameHandler) {
    return;
  }
  console.log(gameTask);
  for (let i = 0; i < rounds; i += 1) {
    const { riddle, correctAnswer } = gameHandler();
    console.log(`Question: ${riddle}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default app;
