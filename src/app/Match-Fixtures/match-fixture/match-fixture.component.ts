import { Component, EventEmitter, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { player } from 'src/app/models/player';
import { PlayerService } from 'src/app/Services/player.service';

@Component({
  selector: 'app-match-fixture',
  templateUrl: './match-fixture.component.html',
  styleUrls: ['./match-fixture.component.css']
})
export class MatchFixtureComponent {
  players: player[];
  pairs: any[] = [];

  @Output() 
  selectedPair = new EventEmitter<player>();

  constructor(private playerService: PlayerService, private router:Router) {
    this.players = [];
    this.pairPlayers();
  }

  ngOnInit() {
    this.fetchPairs();
  }

  loadPlayers() {
    this.playerService.getAllPlayers().subscribe((playerList) => {
      this.players = playerList;
      this.pairPlayers();
    }, (err) => {
      console.log(err);
    });
  }

  pairPlayers() {
    const shuffledPlayers = [...this.players]; 
    let currentIndex = shuffledPlayers.length, randomIndex, tempValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    tempValue = shuffledPlayers[currentIndex];
    shuffledPlayers[currentIndex] = shuffledPlayers[randomIndex];
    shuffledPlayers[randomIndex] = tempValue;
  }

  for (let i = 0; i < shuffledPlayers.length; i += 2) {
    if (i + 1 < shuffledPlayers.length) {
      this.pairs.push([shuffledPlayers[i], shuffledPlayers[i + 1]]);
    }
  }
  }

  savePairs() {
    this.playerService.postPairs(this.pairs).subscribe(
      (response) => {
        console.log('Pairs posted successfully:', response);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error posting pairs:', error);
      }
    );
  }

  fetchPairs() {
    this.playerService.getPairs().subscribe(
      (pairs) => {
        this.pairs = pairs;
      },
      (error) => {
        console.error('Error fetching pairs:', error);
      }
    );
    }
  

 
}
