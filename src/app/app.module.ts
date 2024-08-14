import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { LoginComponent } from './Login/login/login.component';
import { HomeComponent } from './Home/home/home.component';
import { RegistrationComponent } from './Registration/registration/registration.component';
import { PlayerFormComponent } from './Player-Form/player-form/player-form.component';
import { RegisterPlayerComponent } from './Register-Player/register-player/register-player.component';
import { EditRegisterPlayerComponent } from './Edit-Register-Player/edit-register-player/edit-register-player.component';
import {HttpClientModule} from '@angular/common/http';
import { MatchFixtureComponent } from './Match-Fixtures/match-fixture/match-fixture.component';
import { MatchComponent } from './Match/match/match.component';
import { MatchResultComponent } from './Match-Results/match-result/match-result.component';
import { ErrorPageComponent } from './404-Page/error-page/error-page.component';
import { PlayerRankingComponent } from './Player-Ranking/player-ranking/player-ranking.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    PlayerFormComponent,
    RegisterPlayerComponent,
    EditRegisterPlayerComponent,
    MatchFixtureComponent,
    MatchComponent,
    MatchResultComponent,
    ErrorPageComponent,
    PlayerRankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
