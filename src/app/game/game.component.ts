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
    if (this.currentPlayer.choice === "1"){
      console.log(this.currentPlayer.choice);

    }else if (this.currentPlayer.choice==="2") {
      console.log(this.currentPlayer.choice);
    }else {
      console.log(this.currentPlayer.choice);
    }
  }
}
