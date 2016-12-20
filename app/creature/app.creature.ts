

export class Creature {
        name: string;
        type: string;
        hp: number;
        attack: number;
        currentHp: number;
        level: number;

    constructor(creatureName: string, creatureType: string, creatureHp: number, creatureAttack: number) {
        this.name = creatureName || 'Creature';
        this.type = creatureType;
        this.hp = creatureHp || 100;
        this.attack = creatureAttack || 20;
        this.currentHp = creatureHp / 2;
        this.level = 1;
    }
}
