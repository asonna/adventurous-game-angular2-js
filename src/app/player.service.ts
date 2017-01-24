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
  updatePlayer(currentPlayer) {
    for (var i=0; i<players.length; i++) {
      if (currentPlayer.name === players[i].name) {
        players[i] = currentPlayer;
      }
    }
  }
}
