
import { Component, Input, OnInit } from '@angular/core';
/*import { CreatureService } from '../service/creature.service'*/
import { Creature } from '../creature/app.creature';
import { HeroService } from  '../service/app.hero.service';
import { HeroComponent } from '../hero-component/app.hero.component'

@Component({
    selector: 'rest',
    templateUrl: 'app/rest-component/app.rest.component.html',
    styleUrls: ['app/rest-component/app.rest.component.css'],



})

export class RestComponent implements OnInit{
    hero: Creature;
    rests = [
        { title: 'Заснуть под деревом', img: '../img/tree.jpg', description: 'Вы находите укромное место и решаете вздремнуть', multipler: 10},
        { title: 'Таверна', img: '../img/bed.jpg', description: 'Снять комнату', multipler: 15},
        { title: 'Выпить зелье', img: '../img/health_potion.png', description: 'Выпить зелья здоровья', multipler: 50},
    ]


    constructor(private heroService: HeroService) {

    };
    ngOnInit() {

        this.hero = this.heroService.getHero();
        console.log(this.hero, 'was here in rest');
    }
    heal(hp, multipler) {
        console.log('hp was increased ' + this.hero.currentHp);

        if (this.hero.currentHp < hp) {

            return this.hero.currentHp += multipler;
        }
    }
}
