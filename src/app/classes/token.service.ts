import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

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

  isLoggedIn(): boolean {
    if (localStorage.getItem('users')) {
      return true;
    } else {
      return false;
    }
  }
}
