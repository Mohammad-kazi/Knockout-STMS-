import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/Services/player.service';
import { player } from 'src/app/models/player';

@Component({
  selector: 'app-register-player',
  templateUrl: './register-player.component.html',
  styleUrls: ['./register-player.component.css'],
})
export class RegisterPlayerComponent {
  constructor(private playerService: PlayerService, private router: Router) {}

  saveChanges(playerToBeAdded: player) {
    this.playerService.addPlayer(playerToBeAdded).subscribe(
      () => {
        alert('Player Added Successfully');
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
