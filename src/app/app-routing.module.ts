import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { HomeComponent } from './Home/home/home.component';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './Registration/registration/registration.component';
import { RegisterPlayerComponent } from './Register-Player/register-player/register-player.component';
import { EditRegisterPlayerComponent } from './Edit-Register-Player/edit-register-player/edit-register-player.component';
import { MatchFixtureComponent } from './Match-Fixtures/match-fixture/match-fixture.component';
import { MatchComponent } from './Match/match/match.component';
import { MatchResultComponent } from './Match-Results/match-result/match-result.component';
import { ErrorPageComponent } from './404-Page/error-page/error-page.component';
import { PlayerRankingComponent } from './Player-Ranking/player-ranking/player-ranking.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterPlayerComponent},
  { path: 'edit/:id', component: EditRegisterPlayerComponent },
  { path: 'list', component: RegistrationComponent},
  { path: 'match', component:MatchFixtureComponent},
  { path:'match/:player1Id/:player2Id', component: MatchComponent},
  { path:'match-result', component: MatchResultComponent},
  { path:'err', component: ErrorPageComponent},
  { path:'rank', component:PlayerRankingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
