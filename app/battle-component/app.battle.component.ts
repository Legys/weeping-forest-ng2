
import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from  '../service/app.hero.service';
import { Creature } from '../creature/app.creature';

@Component({
    selector: 'battle',
    templateUrl: 'app/battle-component/app.battle.component.html',
    styleUrls: ['app/battle-component/app.battle.component.css'],

})
export class BattleComponent implements OnInit {
    enemy: Creature;
    hero: Creature;

    constructor(private heroService: HeroService, private enemyService: HeroService) {

    };
    ngOnInit() {
        this.enemy = this.enemyService.getEnemy();
        this.hero = this.heroService.getHero();
        console.log(this.enemy, 'was here in battle');
    }

}