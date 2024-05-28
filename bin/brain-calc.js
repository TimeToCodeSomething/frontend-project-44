#!/usr/bin/env node

import greet from '../src/cli.js';
import * as game from '../src/games/calculator.js';

const name = greet();
game.calculator(name);
