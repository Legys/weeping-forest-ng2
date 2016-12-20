
import { Routes } from "@angular/router";
import { LoginComponent } from "./app.login.component";
import { HomeComponent } from "./HomeComponent/app.home.component";

import { GameFrame } from "./gameframe-component/app.gameframe.component";
import { RestComponent } from "./rest-component/app.rest.component";
import { BattleComponent } from "./battle-component/app.battle.component";



export const router: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'gameframe', component: GameFrame, children: [
    { path: 'rest', component: RestComponent},
    { path: 'battle', component: BattleComponent },
  ]},


  { path: '**', redirectTo: '/' }
]



