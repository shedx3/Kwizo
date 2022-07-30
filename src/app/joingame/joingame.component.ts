import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joingame',
  templateUrl: './joingame.component.html',
  styleUrls: ['./joingame.component.css']
})
export class JoingameComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  goToHome(){
    this.router.navigate(['homepage'])
  }
}
