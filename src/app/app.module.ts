import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [AppComponent, LeaderboardComponent, PreviewComponent],
  imports: [BrowserModule, AppRoutingModule],
=======
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
>>>>>>> 2fe15405f56849bc51e87457cc68088b5e4e0442
  providers: [],
  bootstrap: [AppComponent],
})
<<<<<<< HEAD
export class AppModule {}
=======

export class AppModule { }
>>>>>>> 2fe15405f56849bc51e87457cc68088b5e4e0442
