import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreatePlayerComponent} from './create-player/create-player.component';
import {GameComponent} from './game/game.component';
import {WildlifeComponent} from './wildlife/wildlife.component';
import {EndComponent} from './end/end.component';

const appRoutes: Routes = [
  {
    path: '',
    component:CreatePlayerComponent
  },
  {
    path: 'game',
    component:GameComponent
  },
  {
    path: 'wildlife',
    component: WildlifeComponent
  },
  {
    path: 'end',
    component: EndComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
