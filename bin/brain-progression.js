#!/usr/bin/env node

import * as client from "../src/cli.js";
import * as game from "../src/games/progression.js";

var name = client.greet();
game.progression_game(name);
