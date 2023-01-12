const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
        
        this.weapon=null;
        this.shield=null;
    }


    // Launch a fight
    Attaque(defender) {
        const attackPoints = this.getRandomInt(this.getDamage());

        const damages = Math.max(attackPoints - defender.getDefense(), 0);

        defender.life = Math.max(defender.life - damages, 0);
    }


    // Generate a random value between 1 and max
    getRandomInt(max) {
        return 1 + Math.floor(Math.random() * max);
    }


    // Determine if a fighter is still alive
    isAlive() {
        return this.life > 0;
    }


    getDamage(){
        if(this.weapon === null){
            return this.strength
        }else{
       return this.strength + this.weapon.damage
        }
    }


    getDefense(){
        if(this.shield === null){
            return this.dexterity
        }else{
            return this.dexterity + this.shield.protection
        }
        
    }

}


module.exports = Fighter;
