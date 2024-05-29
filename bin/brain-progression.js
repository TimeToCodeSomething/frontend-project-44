#!/usr/bin/env node

import greet from '../src/cli.js';
import progressionGame from '../src/games/progression-game.js';

const name = greet();
progressionGame(name);
