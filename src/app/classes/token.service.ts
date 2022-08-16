import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private authService: AuthService) {}

  public storeToken(token: any): void {
    localStorage.setItem('token', token);
  }

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
    this.authService.getUsers().subscribe((res) => {
      const tokenMatch = res.find((data: any) => {
        return data.token;
      });
      console.log(tokenMatch);
      if (tokenMatch) {
        localStorage.setItem('users', JSON.stringify(tokenMatch));
      }
    });

    if (localStorage.getItem('users')) {
      return true;
    } else {
      return false;
    }
  }
}
