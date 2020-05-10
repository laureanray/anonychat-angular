import {Injectable} from '@angular/core';
import {User} from '../interfaces/user';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user')) as User;
  }

  updateUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
