#!/usr/bin/env node

import * as client from "../src/cli.js";
import * as game from "../src/games/gcd-game.js";

const name = client.greet();
game.gcd_game(name);
