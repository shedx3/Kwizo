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


  isLoggedIn(): boolean {
    if (localStorage.getItem('token')){
        return true;
    }else{
        return false;
    }
  }
}
