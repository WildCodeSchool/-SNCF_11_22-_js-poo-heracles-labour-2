const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
        this.weapon = null;
        this.shield = null;
    }


    // Launch a fight
    fight(defender) {
        // const attackPoints = this.getRandomInt(this.strength);

        const damages = Math.max(this.getDamage - this.getDefense, 0);

        defender.life = Math.max(defender.life - damages, 0);
    }


    // Generate a random value between 1 and max
    getRandomInt(max) {
        return 1 + Math.floor(Math.random() * max);
    }

    //Get Damage
    getDamage(){
        return (this.strength + weapon.damage)
    }

    //Get Defense
    getDefense(){
        return (this.dexterity + shield.protection)
    }


    // Determine if a fighter is still alive
    isAlive() {
        return this.life > 0;
    }
}



module.exports = Fighter;


