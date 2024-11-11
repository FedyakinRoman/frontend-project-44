#!/usr/bin/env node

import app from '../../index.js';
import gcdHandler from '../../src/handlers/gcdHandler.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

app(gcdHandler, gameTask);
