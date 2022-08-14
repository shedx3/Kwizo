import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { CanDeactivateGuardService } from '../services/can-deactivate-guard.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AccountComponent } from './account/account.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PlayDemoComponent } from './play-demo/play-demo.component';
import { PlaygameComponent } from './playgame/playgame.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/homepage' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'createquiz',
    component: CreateQuizComponent,
    canDeactivate: [CanDeactivateGuardService],
    canActivate: [AuthGuard],
  },
  { path: 'playdemo', component: PlayDemoComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'playgame', component: PlaygameComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
