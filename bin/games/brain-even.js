#!/usr/bin/env node

import app from '../../index.js';
import evenHandler from '../../src/handlers/evenHandler.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

app(evenHandler, gameTask);
