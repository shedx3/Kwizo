import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
  { path: '', pathMatch: 'full' },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'preview', component: PreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
