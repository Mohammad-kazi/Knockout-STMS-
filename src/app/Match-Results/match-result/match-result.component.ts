import { Component } from '@angular/core';
import { PlayerService } from 'src/app/Services/player.service';

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.css']
})
export class MatchResultComponent {
  matchResults: any[] = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playerService.getMatchResults().subscribe((results) => {
      this.matchResults = results;
    });
  }
}


