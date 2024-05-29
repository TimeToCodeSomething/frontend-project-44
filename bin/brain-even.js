#!/usr/bin/env node

import greet from '../src/cli.js';
import oddOrEven from '../src/games/odd_or_even.js';

const name = greet();
oddOrEven(name);
