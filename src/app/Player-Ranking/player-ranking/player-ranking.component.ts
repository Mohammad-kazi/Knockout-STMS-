import { Component } from '@angular/core';
import { PlayerService } from 'src/app/Services/player.service';

@Component({
  selector: 'app-player-ranking',
  templateUrl: './player-ranking.component.html',
  styleUrls: ['./player-ranking.component.css'],
})
export class PlayerRankingComponent {
  sortedRankingData: any[] = [];
  constructor(private playerServices: PlayerService) {}

  ngOnInit() {
    this.playerServices.getPlayerRank().subscribe((data) => {
      this.sortedRankingData = data.sort((a, b) => a.rank - b.rank);
    });
  }
}
