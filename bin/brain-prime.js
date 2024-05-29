#!/usr/bin/env node

import greet from '../src/cli.js';
import primeNumberGame from '../src/games/prime-number-game.js';

const name = greet();
primeNumberGame(name);
