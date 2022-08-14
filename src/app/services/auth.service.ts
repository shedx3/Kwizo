import { Injectable } from '@angular/core';
import { ApiHandlerService } from './api-handler.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiHandler: ApiHandlerService) {}

  getUsers() {
    return this.apiHandler.get('users');
  }

  registerUsers(data: any) {
    return this.apiHandler.post('users', data);
  }

  getUsersById(id: number) {
    return this.apiHandler.get('users' + '/' + id);
  }

  editUser(id: number, data: any) {
    return this.apiHandler.put('users' + '/' + id, data);
  }

  deleteUsers(id: number) {
    return this.apiHandler.delete('users' + '/' + id);
  }
}
