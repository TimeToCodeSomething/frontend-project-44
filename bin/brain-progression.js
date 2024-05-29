#!/usr/bin/env node

import greet from '../src/cli.js';
import * as game from '../src/games/progression-game.js';

const name = greet();
game.progression_game(name);
