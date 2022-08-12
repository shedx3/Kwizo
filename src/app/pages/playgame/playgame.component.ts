import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playgame',
  templateUrl: './playgame.component.html',
  styleUrls: ['./playgame.component.css']
})
export class PlaygameComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['homepage']);
  }

}
