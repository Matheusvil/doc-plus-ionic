import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Storage  } from '@ionic/storage';
export interface User {
    email: string;
    password: string;
    name: string;
    birthDay: Date;
    agreement: any;
    address: {
        state: string;
        city: string;
        street: string;
        neighborhood: string;
        number: string;
        complement: string;
        zip: string;
    };
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
    private storage: Storage
  ) {}

  createUser(value: User) {
    return new Promise((resolve, reject) => {
      this.http.post(environment.api + 'api/me', value).subscribe(
          (response: any) => {
            this.saveUser(response.decode, response.token);
            resolve(response);
          } ,
          (error: any) => {
              reject(error);
          }
      );
    });
  }

  saveUser(user: any, token: string) {
    this.storage.set('user', user);
    this.storage.set('token', token);
  }

  async getUser() {
    const user = await this.storage.get('user');
    if (!user) {
        return undefined;
    }
    return user;
  }

  async getToken(): Promise<string> {
    const token = await this.storage.get('token');
    if (!token) {
        return undefined;
    }
    return token;
  }
}
