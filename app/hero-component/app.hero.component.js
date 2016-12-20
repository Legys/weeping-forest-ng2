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
var HeroComponent = (function () {
    function HeroComponent(heroService) {
        this.heroService = heroService;
    }
    ;
    HeroComponent.prototype.ngOnInit = function () {
        this.hero = this.heroService.getHero();
        console.log(this.hero, 'was here in rest');
    };
    HeroComponent = __decorate([
        core_1.Component({
            selector: 'hero-frame',
            templateUrl: 'app/hero-component/app.hero.component.html',
            styleUrls: ['app/hero-component/app.hero.component.css'],
        }), 
        __metadata('design:paramtypes', [app_hero_service_1.HeroService])
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=app.hero.component.js.map