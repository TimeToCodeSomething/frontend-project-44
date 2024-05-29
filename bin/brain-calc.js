#!/usr/bin/env node

import greet from '../src/cli.js';
import calculator from '../src/games/calculator.js';

const name = greet();
calculator(name);
