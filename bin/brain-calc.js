#!/usr/bin/env node

import * as client from "../src/cli.js";
import * as game from "../src/games/calculator.js";

var name = client.greet();
game.calculator(name);
