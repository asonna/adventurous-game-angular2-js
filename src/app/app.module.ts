import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { GameComponent } from './game/game.component';
import { WildlifeComponent } from './wildlife/wildlife.component';
import { EndComponent } from './end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePlayerComponent,
    GameComponent,
    WildlifeComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
