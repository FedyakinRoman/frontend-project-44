#!/usr/bin/env node

import app from '../../index.js';

const gameTask = 'Answer "yes" if given number is even. Otherwise answer "no".';
const gameName = 'even';

app(gameName, gameTask);
