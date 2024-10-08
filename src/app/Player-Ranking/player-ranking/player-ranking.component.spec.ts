import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRankingComponent } from './player-ranking.component';

describe('PlayerRankingComponent', () => {
  let component: PlayerRankingComponent;
  let fixture: ComponentFixture<PlayerRankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerRankingComponent]
    });
    fixture = TestBed.createComponent(PlayerRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
