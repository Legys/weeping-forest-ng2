"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_hero_service_1 = require('../service/app.hero.service');
var RestComponent = (function () {
    function RestComponent(heroService) {
        this.heroService = heroService;
        this.rests = [
            { title: 'Заснуть под деревом', img: '../img/tree.jpg', description: 'Вы находите укромное место и решаете вздремнуть', multipler: 10 },
            { title: 'Таверна', img: '../img/bed.jpg', description: 'Снять комнату', multipler: 15 },
            { title: 'Выпить зелье', img: '../img/health_potion.png', description: 'Выпить зелья здоровья', multipler: 50 },
        ];
    }
    ;
    RestComponent.prototype.ngOnInit = function () {
        this.hero = this.heroService.getHero();
        console.log(this.hero, 'was here in rest');
    };
    RestComponent.prototype.heal = function (hp, multipler) {
        console.log('hp was increased ' + this.hero.currentHp);
        if (this.hero.currentHp < hp) {
            return this.hero.currentHp += multipler;
        }
    };
    RestComponent = __decorate([
        core_1.Component({
            selector: 'rest',
            templateUrl: 'app/rest-component/app.rest.component.html',
            styleUrls: ['app/rest-component/app.rest.component.css'],
        }), 
        __metadata('design:paramtypes', [app_hero_service_1.HeroService])
    ], RestComponent);
    return RestComponent;
}());
exports.RestComponent = RestComponent;
//# sourceMappingURL=app.rest.component.js.map