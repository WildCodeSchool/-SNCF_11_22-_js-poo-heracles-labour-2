const Fighter = require("./src/Fighter.js");
const Weapon = require("./src/weapon.js");
const Shield = require("./src/shield.js");

/** Create Heracles  */
const heracles = new Fighter("🧔 Heracles", 20, 6);

/**Create Epée */
const epee = new Weapon ("Epée", 10);
/**Give Hercles a weapon */
heracles.weapon = epee;
/**Create Bouclier */
const bouclier = new Shield("Bouclier", 10);
/**Give Bouclier to heracles */
heracles.shield = bouclier;
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

const battle = (fighter1,fighter2) => {
  while(fighter1.isAlive()&&fighter2.isAlive()){
    console.log(roundDisplay(fighter1,fighter2));
    fighter1.fight(fighter2);
    console.log(fighter2.life);
    console.log(roundDisplay(fighter2,fighter1));
    fighter2.fight(fighter1);
    console.log(fighter1.life)
  }
  console.log(score(fighter1, fighter2));

}
battle(heracles, boar);