import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    SharedComponent, 
    HeaderComponent
  ],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports: [
    RouterModule,
    HeaderComponent
  ]
})
export class SharedModule {}
