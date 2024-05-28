#!/usr/bin/env node

import * as client from '../src/cli.js';
import * as game from '../src/games/calculator.js';

const name = client.greet();
game.calculator(name);
