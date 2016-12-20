import { Injectable } from '@angular/core';
import { Creature } from '../creature/app.creature';

@Injectable()
export class HeroService{

    private myHero = new Creature('Hero', 'Hero', 120, 25);
    private enemy = new Creature('Yoba', 'Fiend', 300, 10);

    getHero() {
        return this.myHero;
    }
    getEnemy() {
        return this.enemy;
    }
}