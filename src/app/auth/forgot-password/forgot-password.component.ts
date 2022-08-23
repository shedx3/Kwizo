import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotpassword: any = FormGroup;
  changepasswordform: any = FormGroup;
  existingMail: boolean = false;
  spinner: boolean = false;
  changePassword: boolean = false;
  showPassword:boolean =false;
  updatedUser: any;

  constructor( private router:Router,  private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.forgotpassword = this.fb.group({
      email:['', Validators.compose([Validators.required, Validators.email])],
  })

  this.changepasswordform = this.fb.group({
    password:['',Validators.compose([Validators.required, Validators.minLength(8)])]
})
}

emailSubmit(){
  this.spinner = true;
    this.authService.getUsers().subscribe((res) => {
      const emailMatch = res.find((data: any) => {
        this.spinner = false;
        return (
          data.email.toLowerCase() === this.forgotpassword.value.email.toLowerCase()
        );
      });
      console.log(emailMatch);
      if (emailMatch) {
        this.existingMail = false;
        this.changePassword = true;
        this.updatedUser = emailMatch;
      } else {
        this.existingMail = true;
        //this.router.navigate(['login']);
}
})
}

passwordChanged(id:number){
  this.updatedUser.password = this.changepasswordform.value.password
  this.authService.updateUser(id, this.updatedUser).subscribe((res) => {
    console.log(res);
    Swal.fire({
      title: 'Your password has been updated!',
      timer: 2000,
      width: 400,
      icon: 'success',
      showClass: { popup: 'animate__animated animate__fadeInDown' },
      hideClass: { popup: 'animate__animated animate__fadeOutUp' },
    });
    
    this.router.navigate(['login']);
  })
}

// setTimeout(() => {
//   this.router.navigate(['login']);
// }, 2000)
goToLogin() {
  this.router.navigate(['login']);
}

goToHome() {
  this.router.navigate(['homepage']);
}

}
