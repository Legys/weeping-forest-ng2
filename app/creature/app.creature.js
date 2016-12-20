"use strict";
var Creature = (function () {
    function Creature(creatureName, creatureType, creatureHp, creatureAttack) {
        this.name = creatureName || 'Creature';
        this.type = creatureType;
        this.hp = creatureHp || 100;
        this.attack = creatureAttack || 20;
        this.currentHp = creatureHp / 2;
        this.level = 1;
    }
    return Creature;
}());
exports.Creature = Creature;
//# sourceMappingURL=app.creature.js.map