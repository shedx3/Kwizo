import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { JoingameComponent } from './joingame/joingame.component';
import { AccountComponent } from './account/account.component';

import { HomepageComponent } from './homepage/homepage.component';
import { HeadersComponent } from './headers/headers.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { PlayDemoComponent } from './play-demo/play-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    JoingameComponent,
    AccountComponent,
    HomepageComponent,
    HeadersComponent,
    CreateQuizComponent,
    PlayDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
