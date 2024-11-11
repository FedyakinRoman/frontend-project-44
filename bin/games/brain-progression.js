#!/usr/bin/env node

import app from '../../index.js';
import progressionHandler from '../../src/handlers/progressionHandler.js';

const gameTask = 'What number is missing in the progression?';

app(progressionHandler, gameTask);
