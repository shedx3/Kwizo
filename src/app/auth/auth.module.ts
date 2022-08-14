import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { JoingameComponent } from './joingame/joingame.component';
import { LoadingComponent } from '../loading/loading/loading.component';

@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent,
    JoingameComponent,
    LoadingComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, FormsModule],
})
export class AuthModule {}
