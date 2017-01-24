import { Injectable } from '@angular/core';
import {Player} from './player.model';
import {players} from './db-player';

@Injectable()
export class PlayerService {

  constructor() { }

  savePlayer(newPlayer: Player) {
    players.push(newPlayer);
  }
  getPlayer() {
    return players[0];
  }
}
