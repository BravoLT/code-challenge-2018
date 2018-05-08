import { Match } from './framework/index.js';
import { GameOfDrones } from './game/game-of-drones.js';

import AdaptiveDefender from './example-bots/adaptive-defender.js';
import ZergRusher from './example-bots/zerg-rush.js';
import HardHittingPacifist from './example-bots/hard-hitting-pacifist.js';
import Randomonium from './example-bots/random-choices.js';
import TJBot from './bots/tawj.js';

let match = new Match({
  game: new GameOfDrones({ rounds: 1000 }),
  player1: AdaptiveDefender(),
  player2: TJBot()
});

console.log(JSON.stringify(match.play(), null, 2));
