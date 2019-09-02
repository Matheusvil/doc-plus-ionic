import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { UsersService  } from './users.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private http: HttpClient, private userService: UsersService) { }
  authorize(email, password) {
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.api}api/me/oauth`, {
        email, password
      }).subscribe(
          (response: any) => {
            this.userService.saveUser(response.decode, response.token);
            resolve();
          },
          (error) => {
              reject(error);
          }
      );
    });
  }

  logout() {
    this.userService.saveUser(undefined, undefined);
  }
}

