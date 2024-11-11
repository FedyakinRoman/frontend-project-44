#!/usr/bin/env node

import app from '../../index.js';
import evenHandler from '../../src/handlers/evenHandler.js';

const gameTask = 'Answer "yes" if given number is even. Otherwise answer "no".';

app(evenHandler, gameTask);
