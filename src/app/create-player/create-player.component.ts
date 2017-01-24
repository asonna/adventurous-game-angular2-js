import { Component, OnInit } from '@angular/core';
import {Player} from '../player.model';
import {PlayerService} from '../player.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css'],
  providers: [PlayerService]
})
export class CreatePlayerComponent implements OnInit {

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
  }

  createPlayer(name: string, height: number, adventure: string) {
    var newPlayer = new Player(name, height, parseInt(adventure));
    this.playerService.savePlayer(newPlayer);
    this.router.navigate(['game']);
  }
}
