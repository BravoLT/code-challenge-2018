/**
 * This player's strategy alternate creating producers then soldiers and attack at random only when soldiers were last created.
 */
class TJBot {

  constructor() {

    this.meta = {
      name: 'PredictableResourcesRandomAttack',
      author: 'Tom Jahncke'
    };
  }

  onRoundStart(roundRules) {
    this.currentTurn = 0;
    this.turnsInThisRound = roundRules.turns;
    this.turnToAttack = getRandomInt(1, roundRules.turns + 1); // turns + 1 to enable never attacking
  };

  playTurn(playerState) {
    this.currentTurn++;
    let productionCapacity = playerState.producers;

    let producersToCreate = 0;
    let soldiersToCreate = 0;
    let allowAttack = false;
    if (this.currentTurn %2 == 1) {
      producersToCreate = productionCapacity;
    } else {
      soldiersToCreate = productionCapacity;
      this.allowAttack = true;
    }

    if (this.currentTurn <= 1 || this.currentTurn == this.turnsInThisRound) {
      this.allowAttack = false;
    }

    return {
      newProducers: producersToCreate,
      newSoldiers: soldiersToCreate,
      launchAttack: (this.currentTurn >= this.turnToAttack && this.allowAttack)
    };
  }
} 

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function onRoundEnd(roundResult) {
}

function getPlayer() {
  return new TJBot();
}

export default getPlayer;
