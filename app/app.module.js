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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var app_login_component_1 = require("./app.login.component");
var app_gameframe_component_1 = require('./gameframe-component/app.gameframe.component');
var app_home_component_1 = require('./HomeComponent/app.home.component');
var app_rest_component_1 = require('./rest-component/app.rest.component');
var app_battle_component_1 = require('./battle-component/app.battle.component');
var app_hero_component_1 = require('./hero-component/app.hero.component');
var app_hero_service_1 = require('./service/app.hero.service');
var app_router_1 = require('./app.router');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(app_router_1.router)
            ],
            declarations: [app_home_component_1.HomeComponent, app_login_component_1.LoginComponent, app_gameframe_component_1.GameFrame, app_rest_component_1.RestComponent, app_battle_component_1.BattleComponent, app_hero_component_1.HeroComponent],
            providers: [app_hero_service_1.HeroService],
            bootstrap: [app_home_component_1.HomeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map