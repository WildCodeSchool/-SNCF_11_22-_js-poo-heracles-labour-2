const Fighter = require("./src/Fighter.js");
const Shield = require("./src/Shield.js");
const Weapon = require("./src/Weapon.js");

// Create Weapon
const épée = new Weapon("🗡️ Cure dents");
// Create Protection
const bouclier = new Shield("🛡️ Bouclier en torchis");
/** Create Heracles  */
const heracles = new Fighter("🧔 Heracles le bouseux", 20, 6);
heracles.weapon=épée;
heracles.shield=bouclier;
/** Create the opponent  */
const boar = new Fighter("🐗 Erymanthian Boar malade", 25, 12);

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

const fight = (fighter1,fighter2)=> {

  while(fighter1.isAlive() && fighter2.isAlive()){

  fighter1.Attaque(fighter2);
  fighter2.Attaque(fighter1);
  
  console.log(roundDisplay(fighter1,fighter2));
  }
    console.log (score(fighter1,fighter2));  
};

fight(heracles,boar)