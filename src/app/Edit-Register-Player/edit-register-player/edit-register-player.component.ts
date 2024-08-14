import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/Services/player.service';
import { player } from 'src/app/models/player';

@Component({
  selector: 'app-edit-register-player',
  templateUrl: './edit-register-player.component.html',
  styleUrls: ['./edit-register-player.component.css'],
})
export class EditRegisterPlayerComponent {
  Id!: number;
  model!: player;
  constructor(
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.Id = Number(params['id']);
      this.playerService
        .getPlayerById(Number(params['id']))
        .subscribe((playerToBeEdited: player) => {
          this.model = playerToBeEdited;
        });
    });
  }

  saveChanges(playerToBeEdited: player) {
    this.playerService.editPlayer(this.Id, playerToBeEdited).subscribe(
      () => {
        alert('Player Edited Successfully');
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
