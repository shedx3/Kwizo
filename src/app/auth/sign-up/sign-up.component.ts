import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signup: any = FormGroup;
  error: any = null;
  existingMail: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.signup = this.fb.group({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  signupSubmit() {
    this.authService.getUsers().subscribe((res) => {
      const emailMatch = res.find((data: any) => {
        return (
          data.email.toLowerCase() === this.signup.value.email.toLowerCase()
        );
      });
      // console.log(emailMatch);
      if (emailMatch) {
        this.existingMail = true;
      } else {
        this.existingMail = false;

        this.authService.registerUsers(this.signup.value).subscribe((res) => {
          Swal.fire({
            title: 'Your Account has been created successfully!',
            timer: 2000,
            width: 400,
            icon: 'success',
            showClass: { popup: 'animate__animated animate__fadeInDown' },
            hideClass: { popup: 'animate__animated animate__fadeOutUp' },
          });
          this.signup.reset();
          setTimeout(() => {
            this.router.navigate(['login']);
          }, 2000);
        });
      }
    });
  }

  goToHome() {
    this.router.navigate(['homepage']);
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
}
