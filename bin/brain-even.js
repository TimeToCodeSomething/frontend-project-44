#!/usr/bin/env node

import * as client from "../src/cli.js";
import * as game from "../src/odd_or_even.js";

var name = client.greet();
game.odd_or_even(name);
