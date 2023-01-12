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
        
        const attackPoints = this.getRandomInt(this.getDamage());

        const damages = Math.max(attackPoints - this.getDefense(), 0);

        defender.life = Math.max(defender.life - damages, 0);


    }

    getDamage(){
        if(this.weapon === null){
 return this.strength;
        }else{
            return this.strength + this.weapon.damage;
        }
        
    }


    // Generate a random value between 1 and max
    getRandomInt(max) {
        return 1 + Math.floor(Math.random() * max);
    }

    getDefense(){
        if(this.shield === null){
return this.dexterity;
        }else{
return this.dexterity + this.shield.protection;
        }
    }


    // Determine if a fighter is still alive
    isAlive() {
        return this.life > 0;
    }

    // determine nombre de points de vie

    isAlive2(){
        return this.life;
    }


}

module.exports = Fighter;
