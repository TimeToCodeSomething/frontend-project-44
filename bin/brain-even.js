#!/usr/bin/env node

import * as client from '../src/cli.js';
import * as game from '../src/games/odd_or_even.js';

const name = client.greet();
game.odd_or_even(name);
