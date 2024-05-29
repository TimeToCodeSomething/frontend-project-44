#!/usr/bin/env node

import greet from '../src/cli.js';
import gcdGame from '../src/games/gcd-game.js';

const name = greet();
gcdGame(name);
