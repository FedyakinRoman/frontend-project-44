#!/usr/bin/env node

import app from '../../index.js';
import calcHandler from '../../src/handlers/calcHandler.js';

const gameTask = 'What is the result of the expression?';

app(calcHandler, gameTask);
