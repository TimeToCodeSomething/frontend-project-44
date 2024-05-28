#!/usr/bin/env node

import * as client from '../src/cli.js';
import * as game from '../src/games/prime-number-game.js';

const name = client.greet();
game.prime_number_game(name);
