import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service';
import {Player} from '../player.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [PlayerService]
})
export class GameComponent implements OnInit {
  currentPlayer: Player;

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
    this.currentPlayer = this.playerService.getPlayer();
  }

  crossRiver() {
    var probability = 0;
    if (this.currentPlayer.choice === 1){
      probability = Math.floor(Math.random() * 100)+1;
      if (probability > 20) {
        this.currentPlayer.points = this.currentPlayer.points + 2;
      } else {
        this.currentPlayer.points = this.currentPlayer.points - 3;
      }

    }else if (this.currentPlayer.choice===2) {
      probability = Math.floor(Math.random() * 100)+1;
      if (probability > 50) {
        this.currentPlayer.points = this.currentPlayer.points + 4;
      } else {
        this.currentPlayer.points = this.currentPlayer.points - 2;
      }

    }else if (this.currentPlayer.choice===3) {
      probability = Math.floor(Math.random() * 100)+1;
      if (probability > 80) {
        this.currentPlayer.points = this.currentPlayer.points + 10;
      } else {
        this.currentPlayer.points = this.currentPlayer.points - 1;
      }
    }else {

    }

    console.log(this.currentPlayer.points);
  }
}
