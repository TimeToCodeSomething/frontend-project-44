#!/usr/bin/env node

import greet from '../src/cli.js';
import * as game from '../src/games/prime-number-game.js';

const name = greet();
game.prime_number_game(name);
