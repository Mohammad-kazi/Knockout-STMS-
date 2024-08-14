import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchFixtureComponent } from './match-fixture.component';

describe('MatchFixtureComponent', () => {
  let component: MatchFixtureComponent;
  let fixture: ComponentFixture<MatchFixtureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchFixtureComponent]
    });
    fixture = TestBed.createComponent(MatchFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
