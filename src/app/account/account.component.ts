import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToJoinGame() {
    this.router.navigate(['joingame'])
  }


  goToHome(){
    this.router.navigate(['homepage'])
  }

  goToCquiz(){
    this.router.navigate(['createquiz'])
  }

  goToPdemo(){
    this.router.navigate(['playdemo'])
  }

}
