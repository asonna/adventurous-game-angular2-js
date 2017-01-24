import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service';
import {Player} from '../player.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css'],
  providers: [PlayerService]
})
export class EndComponent implements OnInit {
  currentPlayer: Player;
  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
    this.currentPlayer = this.playerService.getPlayer();
  }

  startOver() {
    this.router.navigate(['']);
  }
  success() {
    if (this.currentPlayer.points > 0){
      return "";
    } else {
      return "hidden";
    }
  }
  fail() {
    if (this.currentPlayer.points <= 0){
      return "";
    } else {
      return "hidden";
    }
  }

}
