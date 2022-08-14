import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalsService {
  constructor(private token: TokenService) {
    const obj = this;
  }

  firstName = this.token.user().firstname;
  lastName = this.token.user().lastname;
  email = this.token.user().email;
  password = this.token.user().password;
}
