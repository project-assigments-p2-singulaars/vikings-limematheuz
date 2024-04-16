import { Viking } from "./Viking";
import { Soldier } from "./Soldier";
import { Saxon } from "./Saxon";

export class War {
    vikingArmy: Viking[] = [];
    saxonArmy: Saxon[] = [];

  constructor() {}

  addViking(viking: Viking) {
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon: Saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack() {
    const randomSaxonIndex = Math.floor(Math.random()* this.saxonArmy.length)
    const randomVikingIndex = Math.floor(Math.random()* this.vikingArmy.length)
    this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength)
    
    if (this.saxonArmy[randomSaxonIndex].health <= 0)
        this.saxonArmy.splice(randomSaxonIndex, 1)
}

  saxonAttack() {}

  showStatus() {}
}
