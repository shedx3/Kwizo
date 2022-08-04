import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AccountComponent } from './account/account.component';
import { JoingameComponent } from './joingame/joingame.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LogInComponent } from './log-in/log-in.component';
import { PreviewComponent } from './preview/preview.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { PlayDemoComponent } from './play-demo/play-demo.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'preview', component: PreviewComponent },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'account', component: AccountComponent },
  { path: 'joingame', component: JoingameComponent },
  { path: 'createquiz', component: CreateQuizComponent},
  { path: 'playdemo', component: PlayDemoComponent},
  { path: 'aboutus', component:AboutusComponent},
  { path: 'footer', component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
