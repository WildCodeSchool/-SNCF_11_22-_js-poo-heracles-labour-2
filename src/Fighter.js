const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity, weapon = null, shield = null) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.weapon = weapon;
    this.shield = shield;
  }

  // Launch a fight
  fight(defender) {
    const attackPoints = this.getRandomInt(this.strength);

    const damages = Math.max(attackPoints - defender.dexterity, 0);

    defender.life = Math.max(defender.life - damages, 0);

    const degats = this.getDamage(this.life);

    const bouclier = (this.dexterity += this.protection);
  }

  // Generate a random value between 1 and max
  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }

  // Determine if a fighter is still alive
  isAlive() {
    return this.life > 0;
  }

  getDamage() {
    return (this.strength += this.fight.damages);
  }

  getDefense() {
    return (this.dexterity += this.protection);
  }
}

module.exports = Fighter;

class Weapon {
  constructor(name) {
    this.name = name;
    this.damage = 10;
  }
}

module.exports = Weapon;

class Shield {
  constructor(name) {
    this.name = name;
    this.protection = 10;
  }
}

module.exports = Shield;
