import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [];

  constructor(private http: HttpClient) {}

  signupUser(user: User) {
    return this.http.post<User>(
      'https://ng-breaking-news-gr-users-default-rtdb.europe-west1.firebasedatabase.app/users.json',
      user
    );
  }

  private getUsers(): void {
    this.http
      .get<User[]>(
        'https://ng-breaking-news-gr-users-default-rtdb.europe-west1.firebasedatabase.app/users.json'
      )
      .pipe(
        map((response) => {
          const usersArr = [];
          for (let key in response) {
            usersArr.push({ ...response[key], id: key });
          }
          return usersArr;
        })
      )
      .subscribe((usersData: User[]) => {
        for (let user of usersData) {
          this.users.push(user);
        }
      });
  }
}
