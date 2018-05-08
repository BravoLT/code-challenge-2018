import { Match } from './framework/index.js';
import { GameOfDrones } from './game/game-of-drones.js';

import AdaptiveDefender from './example-bots/adaptive-defender.js';
import ZergRusher from './example-bots/zerg-rush.js';
import HardHittingPacifist from './example-bots/hard-hitting-pacifist.js';
import Randomonium from './example-bots/random-choices.js';

//AJONP Imports
import AJONPRobinsons from './ajonp-bots/ajonp-robinsons.js';

matchStart()
let match = new Match({
  game: new GameOfDrones({ rounds: 1000 }),
  player1: AJONPRobinsons(),
  player2: AdaptiveDefender()
});
console.log(JSON.stringify(match.play(), null, 2));

matchStart()
match = new Match({
  game: new GameOfDrones({ rounds: 1000 }),
  player1: AJONPRobinsons(),
  player2: ZergRusher()
});
console.log(JSON.stringify(match.play(), null, 2));

matchStart()
match = new Match({
  game: new GameOfDrones({ rounds: 1000 }),
  player1: AJONPRobinsons(),
  player2: HardHittingPacifist()
});
console.log(JSON.stringify(match.play(), null, 2));

matchStart()
match = new Match({
  game: new GameOfDrones({ rounds: 1000 }),
  player1: AJONPRobinsons(),
  player2: Randomonium()
});
console.log(JSON.stringify(match.play(), null, 2));

function matchStart(){
  let i=0;
  do {
    console.log('MATCHMATCHMATCHMATCH\n');
    i++;
  }
  while (i < 10);
}
