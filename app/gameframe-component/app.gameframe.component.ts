
import { Component } from '@angular/core'
import { RestComponent } from '../rest-component/app.rest.component';
import { HeroComponent } from '../hero-component/app.hero.component'

@Component ({
  selector: 'game-frame',
  template:
    `
     <div class="gameframe__navbar">
         <a routerLink='/gameframe/rest' class="gameframe__navbutton"> Отдых </a>
         <a routerLink="/gameframe/battle" class="gameframe__navbutton"> Бой </a>
    
    </div>
    <div class="gameframe__main">
         <hero-frame></hero-frame>
         <router-outlet></router-outlet>
    </div>
  
   
    `,

  styleUrls: ['app/gameframe-component/app.gameframe.component.css']
})

export class GameFrame {

}
