import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PlayerService } from 'src/app/Services/player.service';
import { player } from 'src/app/models/player';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css'],
})
export class MatchComponent {
  @Input()
  selectedPair: any;
  firstName?;
  player1: player;
  player2: player;
  date = new Date();
  p1R1Points: number;
  p1R2Points: number;
  p1R3Points: number;
  p2R1Points: number;
  p2R2Points: number;
  p2R3Points: number;
  p1TotalPoints: number;
  p2TotalPoints: number;
  winner: string;
  winnerMessage: string | null = null;

  constructor(
    private playerService: PlayerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // Retrieve the route parameters (player1Id and player2Id)
    this.activatedRoute.params.subscribe((params: Params) => {
      const player1Id = Number(params['player1Id']);
      const player2Id = Number(params['player2Id']);

      this.playerService.getPlayerById(player1Id).subscribe((player1) => {
        this.player1 = player1;

        this.playerService.getPlayerById(player2Id).subscribe((player2) => {
          this.player2 = player2;

          this.selectedPair = { player1, player2 };
        });
      });
    });
  }

  calculateTotalPointsPlayer1(): number {
    this.p1TotalPoints = this.p1R1Points + this.p1R2Points + this.p1R3Points;
    return this.p1R1Points + this.p1R2Points + this.p1R3Points;
  }

  calculateTotalPointsPlayer2(): number {
    this.p2TotalPoints = this.p2R1Points + this.p2R2Points + this.p2R3Points;
    return this.p2R1Points + this.p2R2Points + this.p2R3Points;
  }

  calculateWinner() {
    const totalPointsPlayer1 = this.calculateTotalPointsPlayer1();
    const totalPointsPlayer2 = this.calculateTotalPointsPlayer2();

    if (totalPointsPlayer1 > totalPointsPlayer2) {
      this.winner = this.player1.firstName;
      this.winnerMessage = 'Player 1 wins!';
    } else if (totalPointsPlayer1 < totalPointsPlayer2) {
      this.winner = this.player1.firstName;
      this.winnerMessage = 'Player 2 wins!';
    } else {
      this.winner = 'tie';
      this.winnerMessage = "It's a tie!";
    }
  }

  saveMatchResult() {
    this.playerService
      .postMatchResult(
        this.player1,
        this.player2,
        this.p1TotalPoints,
        this.p2TotalPoints,
        this.winner
      )
      .subscribe(
        (response) => {
          alert('Match Result Posted Successfully');
        },
        (error) => {
          console.error('Error posting match result:', error);
        }
      );
  }
}
