import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', redirectTo: 'leaderboard', pathMatch: 'full' },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'preview', component: PreviewComponent },
=======
  { path: '', redirectTo: '/user/dashboard', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
>>>>>>> 2fe15405f56849bc51e87457cc68088b5e4e0442
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
