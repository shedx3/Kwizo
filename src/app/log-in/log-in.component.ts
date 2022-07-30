import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  login:any = FormGroup;
  constructor( private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {

    this.login = this.fb.group({
      username:['', Validators.required],
      password:['',Validators. compose([Validators.required,Validators.minLength(8)])]
    })
  }

  loginSubmit(data:any){
    console.log(data)   
  }

  goToSignup() {
    this.router.navigate(['signup'])
  }

  goToHome(){
    this.router.navigate(['homepage'])
  }

}
