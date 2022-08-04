import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signup:any = FormGroup
  constructor(private fb:FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.signup = this.fb.group({
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      email:['', Validators.compose([Validators.required, Validators.email])],
      password:['',Validators.compose([Validators.required,Validators.minLength(8)])],
      confirmpassword:['',Validators.compose([Validators.required,Validators.minLength(8)])]
    })
  }

  signupSubmit(data:any){
    console.log(data)   
  }

  goToHome(){
    this.router.navigate(['homepage'])
  }

  goToLogin(){
    this.router.navigate(['login'])
  }

  goToAccount(){
    this.router.navigate(['account'])
  }
  }
