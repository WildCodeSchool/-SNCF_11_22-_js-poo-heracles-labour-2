const Fighter = require("./src/Fighter.js");
const Weapon = require("./src/Weapon.js");
const Shield = require("./src/Shield.js");

const epee = new Weapon("épée", 20);
const shield = new Shield();
const peau = new Shield(20);
const defense= new Weapon("défense",5)
/** Create Heracles  */
const heracles = new Fighter("🧔 Heracles", 20, 6, epee, shield);

/** Create the opponent  */
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);

/**
 * Helper to produce the result of a round
 */
const roundDisplay = (fighter1, fighter2) => {
  return `${fighter1.name} 🗡  ${fighter1.getDamage()} 🛡 ${fighter2.getDefense()} ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;
};

/**
 * Helper to dispatch fighters between winner and loser
 */
const score = (fighter1, fighter2) => {
  return fighter1.isAlive() ? {
    winner: fighter1,
    loser: fighter2,
  } : {
    winner: fighter2,
    loser: fighter1
  };
};

const fight = (fighter1, fighter2) => {
  while (fighter1.life > 0 && fighter2.life > 0) {

    if (fighter1.life > 0) {
      fighter1.fight(fighter2)
      roundDisplay(fighter1, fighter2);
      console.log(roundDisplay(fighter1, fighter2));
    }
    if (fighter2.life > 0) {
      fighter2.fight(fighter1)
      roundDisplay(fighter2, fighter1)
      console.log(roundDisplay(fighter2, fighter1) );
    }
  }
  console.log(score(fighter1, fighter2))
}
fight(heracles, boar)