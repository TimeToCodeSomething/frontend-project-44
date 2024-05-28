#!/usr/bin/env node

import greet from '../src/cli.js';
import * as game from '../src/games/gcd-game.js';

const name = greet();
game.gcd_game(name);
