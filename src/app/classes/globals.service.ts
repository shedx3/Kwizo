import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalsService {
  constructor() {
  }


  firstName = this.user().firstname;
  lastName = this.user().lastname;
  email = this.user().email;
  password = this.user().password;

  public user(): any {
    if (!localStorage.getItem('users')) {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      };
    } else {
      const info = localStorage.getItem('users');
      // @ts-ignore
      const user = JSON.parse(info);
      // @ts-ignore
      return JSON.parse(info);
    }
  }

  
}
