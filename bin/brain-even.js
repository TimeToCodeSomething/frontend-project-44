#!/usr/bin/env node

import greet from '../src/cli.js';
import * as game from '../src/games/odd_or_even.js';

const name = greet();
game.odd_or_even(name);
