import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { player } from '../models/player';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private httpClient: HttpClient) {}

  getAllPlayers(): Observable<player[]> {
    return this.httpClient.get<player[]>('http://localhost:3000/player');
  }

  addPlayer(playerToBeAdded: player) {
    return this.httpClient.post(
      'http://localhost:3000/player',
      playerToBeAdded
    );
  }

  getPlayerById(id: number) {
    return this.httpClient.get<player>(`http://localhost:3000/player/${id}`);
  }

  editPlayer(id: number, playerToBeEdited: player) {
    return this.httpClient.put(
      `http://localhost:3000/player/${id}`,
      playerToBeEdited
    );
  }

  deletePlayer(id: Number) {
    return this.httpClient.delete(`http://localhost:3000/player/${id}`);
  }

  postPairs(pairs: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/matches', pairs);
  }

  getPairs(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/matches');
  }

  postMatchResult(
    player1: player,
    player2: player,
    p1TotalPoints: number,
    p2TotalPoints: number,
    winner: string
  ): Observable<any> {
    const matchResult = {
      player1FirstName: player1.firstName,
      player2FirstName: player2.firstName,
      p1TotalPoints: p1TotalPoints,
      p2TotalPoints: p2TotalPoints,
      winner: winner,
    };

    return this.httpClient.post(
      'http://localhost:3000/matchResult',
      matchResult
    );
  }

  getMatchResults(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/matchResult');
  }

  getPlayerRank(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/ranking');
  }
}
