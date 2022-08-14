import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  login: any = FormGroup;
  invalidemail: boolean = false;
  spinner: boolean = false;
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.login = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(8)])
      ),
    });
  }

  loginSubmit() {
    this.spinner = true;
    this.authService.getUsers().subscribe((res) => {
      this.spinner = false;
      const emailMatch = res.find((data: any) => {
        return (
          data.email.toLowerCase() === this.login.value.email.toLowerCase() &&
          data.password === this.login.value.password
        );
      });
      console.log(emailMatch);
      if (emailMatch) {
        localStorage.setItem('user', JSON.stringify(emailMatch));
        this.router.navigate(['account']);
      } else {
        this.invalidemail = true;
      }
    });
  }

  goToSignup() {
    this.router.navigate(['signup']);
  }

  goToHome() {
    this.router.navigate(['homepage']);
  }
}
