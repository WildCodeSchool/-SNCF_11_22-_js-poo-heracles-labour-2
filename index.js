const Fighter = require("./src/Fighter.js");
const Weapon = require('./src/Weapon.js');
const Shield = require('./src/Shield.js');
/** Create Heracles  */
const heracles = new Fighter("🧔 Heracles", 20, 6);

/** Create the opponent  */


// Create the weapon
const weapon = new Weapon("Sword");
heracles.weapon = weapon;

const boar = new Fighter("🐗 Erymanthian Boar", 25, 12, weapon);
// Create the Shield

const shield = new Shield();
heracles.shield = shield;




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
