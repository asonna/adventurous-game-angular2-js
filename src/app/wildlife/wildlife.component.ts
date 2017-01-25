import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service';
import {Player} from '../player.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wildlife',
  templateUrl: './wildlife.component.html',
  styleUrls: ['./wildlife.component.css'],
  providers: [PlayerService]
})
export class WildlifeComponent implements OnInit {
  currentPlayer: Player;
  imageSource: string = "";

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
    this.currentPlayer = this.playerService.getPlayer();
  }

  updateImage() {
    if (this.currentPlayer.choice === 1) {
      this.imageSource = "../assets/images/valleyWolf.jpg";
    } else if (this.currentPlayer.choice === 2) {
      this.imageSource = "../assets/images/forestLion.jpg";
    } else if (this.currentPlayer.choice === 3) {
      this.imageSource = "../assets/images/mountainBear.jpg";
    } else {
      this.imageSource = "";
    }
  }
  crossForest() {
    var probability: number;
    if (this.currentPlayer.choice === 1){
      if (this.currentPlayer.adventure === 1) {
        this.currentPlayer.points = this.currentPlayer.points + 2;
        this.currentPlayer.success = true;
        this.currentPlayer.message = "While passing through the valley, you encounter a cute little squirrel. You give it an acorn and go along your merry way!";
        this.playerService.updatePlayer(this.currentPlayer);
        this.router.navigate(["end"]);
      } else {
        probability = Math.floor(Math.random() * 100)+1;
        if (probability > 50) {
          this.currentPlayer.points = this.currentPlayer.points + 4;
          this.currentPlayer.success = true;
          this.currentPlayer.message = "While passing through the valley, you encounter a hungry pack of wolves! They attack you, but you fight bravely and manage to escape. Good work!";
          this.playerService.updatePlayer(this.currentPlayer);
          this.router.navigate(["end"]);
        } else {
          this.currentPlayer.points = this.currentPlayer.points - 4;
          this.currentPlayer.success = false;
          this.currentPlayer.message = "While passing through the valley, you encounter a hungry pack of wolves! They attack you ferociously and overwhelm you. You barely manage to run back to the valley entrance. Try again!";
          this.checkScore();
        }
      }
    } else if (this.currentPlayer.choice === 2){
      if (this.currentPlayer.adventure === 2) {
        this.currentPlayer.points = this.currentPlayer.points + 2;
        this.currentPlayer.success = true;
        this.currentPlayer.message = "While passing through the forest, you encounter a cute little squirrel. You give it an acorn and go along your merry way!";
        this.playerService.updatePlayer(this.currentPlayer);
        this.router.navigate(["end"]);
      } else {
        probability = Math.floor(Math.random() * 100)+1;
        if (probability > 50) {
          this.currentPlayer.points = this.currentPlayer.points + 8;
          this.currentPlayer.success = true;
          this.currentPlayer.message = "While passing through the forest, you encounter a hungry pack of lions! They attack you, but you fight bravely and manage to escape. Good work!";
          this.playerService.updatePlayer(this.currentPlayer);
          this.router.navigate(["end"]);
        } else {
          this.currentPlayer.points = this.currentPlayer.points - 4;
          this.currentPlayer.success = false;
          this.currentPlayer.message = "While passing through the forest, you encounter a hungry pack of lions! They attack you ferociously and overwhelm you. You barely manage to run back to the forest entrance. Try again!";
          this.checkScore();
        }
      }
    } else if (this.currentPlayer.choice === 3){
      if (this.currentPlayer.adventure === 3) {
        this.currentPlayer.points = this.currentPlayer.points + 2;
        this.currentPlayer.success = true;
        this.currentPlayer.message = "While passing over the mountain, you encounter a cute little squirrel. You give it an acorn and go along your merry way!";
        this.playerService.updatePlayer(this.currentPlayer);
        this.router.navigate(["end"]);
      } else {
        probability = Math.floor(Math.random() * 100)+1;
        if (probability > 50) {
          this.currentPlayer.points = this.currentPlayer.points + 6;
          this.currentPlayer.success = true;
          this.currentPlayer.message = "While passing over the mountain, you encounter a hungry grizzly bear! It attacks you, but you fight bravely and manage to escape. Good work!";
          this.playerService.updatePlayer(this.currentPlayer);
          this.router.navigate(["end"]);
        } else {
          this.currentPlayer.points = this.currentPlayer.points - 4;
          this.currentPlayer.success = false;
          this.currentPlayer.message = "While passing over the mountain, you encounter a hungry grizzly bear! It attacks you ferociously and overwhelms you. You barely manage to run back to the forest entrance. Try again!";
          this.checkScore();
        }
      }
    }

  }

  checkScore() {
    if (this.currentPlayer.points <= 0) {
      this.currentPlayer.message = "";
      this.router.navigate(["end"]);
    }
  }

}
