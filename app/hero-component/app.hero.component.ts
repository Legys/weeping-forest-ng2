
import { Component, Input, OnInit } from '@angular/core';
/*import { CreatureService } from '../service/creature.service'*/
import { Creature } from '../creature/app.creature';
import { HeroService } from  '../service/app.hero.service';


@Component({
    selector: 'hero-frame',
    templateUrl: 'app/hero-component/app.hero.component.html',
    styleUrls: ['app/hero-component/app.hero.component.css'],
})

export class HeroComponent implements  OnInit {
    hero: Creature;

    constructor(private heroService: HeroService) {

    };
    ngOnInit() {

        this.hero = this.heroService.getHero();
        console.log(this.hero, 'was here in rest');
    }


}
