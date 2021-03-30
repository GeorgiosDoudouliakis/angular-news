import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  signupUser(user: User) {
    return this.http.post<User>(
      'https://ng-breaking-news-gr-users-default-rtdb.europe-west1.firebasedatabase.app/users.json',
      user
    );
  }
}
