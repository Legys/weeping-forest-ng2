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
var BattleComponent = (function () {
    function BattleComponent(heroService, enemyService) {
        this.heroService = heroService;
        this.enemyService = enemyService;
    }
    ;
    BattleComponent.prototype.ngOnInit = function () {
        this.enemy = this.enemyService.getEnemy();
        this.hero = this.heroService.getHero();
        console.log(this.enemy, 'was here in battle');
    };
    BattleComponent = __decorate([
        core_1.Component({
            selector: 'battle',
            templateUrl: 'app/battle-component/app.battle.component.html',
            styleUrls: ['app/battle-component/app.battle.component.css'],
        }), 
        __metadata('design:paramtypes', [app_hero_service_1.HeroService, app_hero_service_1.HeroService])
    ], BattleComponent);
    return BattleComponent;
}());
exports.BattleComponent = BattleComponent;
//# sourceMappingURL=app.battle.component.js.map