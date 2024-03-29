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
var GameFrame = (function () {
    function GameFrame() {
    }
    GameFrame = __decorate([
        core_1.Component({
            selector: 'game-frame',
            template: "\n     <div class=\"gameframe__navbar\">\n         <a routerLink='/gameframe/rest' class=\"gameframe__navbutton\"> \u041E\u0442\u0434\u044B\u0445 </a>\n         <a routerLink=\"/gameframe/battle\" class=\"gameframe__navbutton\"> \u0411\u043E\u0439 </a>\n    \n    </div>\n    <div class=\"gameframe__main\">\n         <hero-frame></hero-frame>\n         <router-outlet></router-outlet>\n    </div>\n  \n   \n    ",
            styleUrls: ['app/gameframe-component/app.gameframe.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], GameFrame);
    return GameFrame;
}());
exports.GameFrame = GameFrame;
//# sourceMappingURL=app.gameframe.component.js.map