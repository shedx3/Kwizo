import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AccountComponent } from './account/account.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PlayDemoComponent } from './play-demo/play-demo.component';
import { PlaygameComponent } from './playgame/playgame.component';
import { HeadersComponent } from './headers/headers.component';

@NgModule({
  declarations: [
    AboutusComponent,
    AccountComponent,
    CreateQuizComponent,
    FooterComponent,
    HeadersComponent,
    HomepageComponent,
    LeaderboardComponent,
    PlayDemoComponent,
    PlaygameComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, ReactiveFormsModule, FormsModule],
})
export class PagesModule {}
