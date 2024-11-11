#!/usr/bin/env node

import app from '../../index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameName = 'prime';

app(gameName, gameTask);
