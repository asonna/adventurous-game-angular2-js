import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreatePlayerComponent} from './create-player/create-player.component';
import {GameComponent} from './game/game.component';

const appRoutes: Routes = [
  {
    path: '',
    component:CreatePlayerComponent
  },
  {
    path: 'game',
    component:GameComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
