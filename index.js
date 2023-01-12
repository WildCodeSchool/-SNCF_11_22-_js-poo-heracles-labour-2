const Fighter = require("./src/Fighter.js");
const Sword = require("./src/Weapon.js");
const Shield = require("./src/Shield.js");
/** Create weapon */

const epee = new Sword("Epee");

// Create shield

const bouclier = new Shield("Greek");

/** Create Heracles  */
const heracles = new Fighter("🧔 Heracles", 20, 6);
heracles.weapon = epee
heracles.shield = bouclier


/** Create the opponent  */
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);
/**
 * Helper to produce the result of a round
 */
const roundDisplay = (fighter1, fighter2) => {
  return `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;
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

console.log(roundDisplay(heracles, boar));
console.log(score(heracles, boar));
