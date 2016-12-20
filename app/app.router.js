"use strict";
var app_login_component_1 = require("./app.login.component");
var app_gameframe_component_1 = require("./gameframe-component/app.gameframe.component");
var app_rest_component_1 = require("./rest-component/app.rest.component");
var app_battle_component_1 = require("./battle-component/app.battle.component");
exports.router = [
    { path: '', component: app_login_component_1.LoginComponent },
    { path: 'login', component: app_login_component_1.LoginComponent },
    { path: 'gameframe', component: app_gameframe_component_1.GameFrame, children: [
            { path: 'rest', component: app_rest_component_1.RestComponent },
            { path: 'battle', component: app_battle_component_1.BattleComponent },
        ] },
    { path: '**', redirectTo: '/' }
];
//# sourceMappingURL=app.router.js.map