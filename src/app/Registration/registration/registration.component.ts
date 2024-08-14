import { Component } from '@angular/core';
import { PlayerService } from 'src/app/Services/player.service';
import { player } from 'src/app/models/player';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  players: player[];

  constructor(private playerService: PlayerService) {
    this.players = [];
  }

  ngOnInit() {
    this.loadPlayers();
  }

  loadPlayers() {
    this.playerService.getAllPlayers().subscribe(
      (playerList) => {
        this.players = playerList;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deletePlayer(id: Number) {
    this.playerService.deletePlayer(id).subscribe(
      () => {
        alert('Record Deleted Successfully');
        this.loadPlayers();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
