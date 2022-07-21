import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { JoingameComponent } from './joingame/joingame.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LogInComponent } from './log-in/log-in.component';
import { PreviewComponent } from './preview/preview.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/dashboard', pathMatch: 'full' },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'preview', component: PreviewComponent },
  { path: 'login', component: LogInComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'account', component: AccountComponent},
  { path: 'joingame', component: JoingameComponent},
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
