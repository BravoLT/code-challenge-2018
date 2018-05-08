  /**
   * This is meant to be like the Lost in Space robot, Get angry quick...then relax, then full anger.
   */

class AJONPRobinsons {
  constructor() {
    this.meta = {
      name: 'Danger Will Robinson',
      author: 'AJONP (aka Alex Patterson)'
    };
    this.roundCount = 0;
    this.totalRounds = 0;
  }

  /**
   * OPTIONAL method / lifecycle hook.
   * Called by the framework to notify Player the start of the Match, providing the rules for the Match
   *
   * Parameters:
   *   matchRules - { rounds: <numberOfRoundsInMatch> }
   */
  onMatchStart(matchRules) { 
    console.log(`Guess we are going to play ${matchRules.rounds}, Danger Will Robinson!`);
    this.totalRounds = matchRules.numberOfRoundsInMatch;
  };

  /**
   * OPTIONAL method / lifecycle hook.
   * Called by the framework to notify Player of the start of a Round, providing the rules for the Round
   *
   * Parameters:
   *   roundRules - {
   *     turns: <maxNumberOfTurnsInRound>,
   *     defenderBonus: <amountOfBonusAttackPowerWhenDefending>
   *   }
   */
  onRoundStart(roundRules) { 
    this.roundRules = roundRules;
    this.roundCount++;
    console.log('bonusattack',roundRules.defenderBonus);
  };

  /**
   * REQUIRED method!
   * Called by the framework to solicit the Player's actions each turn, providing the Player's current state.
   * This is the only mechanism by which the Player is able to communicate with the Game.
   *
   * Parameters:
   *   playerState - {
   *     producers: <currentProducerCount>,
   *     soldiers: <currentSoldierCount>
   *   }
   *
   * Expected Return Value: PlayerActions
   *   {
   *     newProducers: <numberOfNewProducersToProduce>,
   *     newSoldiers: <numberOfNewSoldiersToProduce>,
   *     launchAttack: <true | false -- set to true to launch attack with your soldiers at end of turn>
   *   }
   */
  playTurn(playerState) {
    let launchAttach = true;
    if((this.roundCount / this.totalRounds) < .1){
      return {
        newProducers: 0,
        newSoldiers: 0,
        launchAttack: true
      };
    }else if((this.roundCount / this.totalRounds) > .9){
      return {
        newProducers: 0,
        newSoldiers: 0,
        launchAttack: true
      };
    }else{
      return {
        newProducers: 1,
        newSoldiers: 1,
        launchAttack: false
      };
    }

  }

  /**
   * OPTIONAL method.
   * Called by the framework to notify Player of the end of a Round, providing the results of the round.
   *
   * Parameters:
   *   roundResult - {
   *     outcome: <'WIN' | 'LOSS' | 'DRAW'>,
   *     turnsPlayed: <numberOfTurnsPlayedInRound>,
   *     you: {
   *       producers: <yourProducerCountAtEndOfRound>,
   *       soldiers: <yourSoldierCountAtEndOfRound>,
   *       attackLaunched: <true | false -- true if you launched attack on last turn>
   *     },
   *     them: {
   *       producers: <theirProducerCountAtEndOfRound>,
   *       soldiers: <theirSoldierCountAtEndOfRound>,
   *       attackLaunched: <true | false -- true if they launched attack on last turn>
   *     }
   *   }
   */
  onRoundEnd(roundResult) { };

}

function getPlayer() {
  return new AJONPRobinsons();
}

export default getPlayer;
