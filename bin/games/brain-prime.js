#!/usr/bin/env node

import app from '../../index.js';
import primeHandler from '../../src/handlers/primeHandler.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

app(primeHandler, gameTask);
