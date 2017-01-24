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
        this.currentPlayer.success = true;
        this.currentPlayer.message = "You floated across safely.";
        this.playerService.updatePlayer(this.currentPlayer);
        this.router.navigate(["wildlife"]);
      } else {
        this.currentPlayer.points = this.currentPlayer.points - 3;
        this.currentPlayer.success = false;
        this.currentPlayer.message = "A crocodile attacked your boat and it tipped over! You barely managed to swim back to shore. Try again!";
        this.checkScore();
      }

    }else if (this.currentPlayer.choice===2) {
      probability = Math.floor(Math.random() * 100)+1;
      if (probability > 50) {
        this.currentPlayer.points = this.currentPlayer.points + 4;        this.currentPlayer.success = true;
        this.currentPlayer.message = "The bridge was wobbly, but it held up and you made it across. Good job!";
        this.playerService.updatePlayer(this.currentPlayer);
        this.router.navigate(["wildlife"]);
      } else {
        this.currentPlayer.points = this.currentPlayer.points - 2;        this.currentPlayer.success = false;
        this.currentPlayer.message = "One of the boards broke when you stepped on it and you fell through! You barely managed to swim back to shore. Try again!";
        this.checkScore();
      }

    }else if (this.currentPlayer.choice===3) {
      probability = Math.floor(Math.random() * 100)+1;
      if (probability > 80) {
        this.currentPlayer.points = this.currentPlayer.points + 10;        this.currentPlayer.success = true;
        this.currentPlayer.message = "Your feet got wet, but you stood against the current and made it safely across. Great job!!";
        this.playerService.updatePlayer(this.currentPlayer);
        this.router.navigate(["wildlife"]);
      } else {
        this.currentPlayer.points = this.currentPlayer.points - 1;        this.currentPlayer.success = false;
        this.currentPlayer.message = "The water was too deep and the current was too strong for you. You lost your footing and almost drowned! You barely managed to swim back to shore. Try again!";
        this.checkScore();
      }
    }else {

    }


    console.log(this.currentPlayer.points);
  }

  checkScore() {
    if (this.currentPlayer.points <= 0) {
      this.currentPlayer.message = "";
      this.router.navigate(["end"]);
    }
  }
}
