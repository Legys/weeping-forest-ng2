import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent} from "./app.login.component";
import { GameFrame } from './gameframe-component/app.gameframe.component';
import { HomeComponent } from './HomeComponent/app.home.component';
import { RestComponent } from './rest-component/app.rest.component'
import { BattleComponent } from './battle-component/app.battle.component'
import { HeroComponent } from  './hero-component/app.hero.component'


import { HeroService } from './service/app.hero.service';



import  { router } from './app.router';



@NgModule({
  imports: [ BrowserModule,
    RouterModule.forRoot(router)
    ],

  declarations: [ HomeComponent, LoginComponent, GameFrame, RestComponent, BattleComponent, HeroComponent ],
  providers: [ HeroService ],
  bootstrap:    [ HomeComponent ]
})
export class AppModule { }
