import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  userData: any;

  constructor(private router: Router, private auth: AuthGuard) {}

  ngOnInit(): void {
    this.userData = localStorage.getItem('user');
    this.userData = JSON.parse(this.userData);
    console.log(this.userData);
  }

  goToJoinGame() {
    this.router.navigate(['joingame']);
  }

  goToHome() {
    this.router.navigate(['homepage']);
  }

  goToCquiz() {
    this.router.navigate(['createquiz']);
  }

  goToPdemo() {
    this.router.navigate(['playdemo']);
  }
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
