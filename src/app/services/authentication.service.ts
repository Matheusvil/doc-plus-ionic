import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private http: HttpClient) { }
  authorize(email, password){
    return new Promise((resolve, reject)=>{
      this.http.post(environment.api+'api/user/oauth',{
        email, password
      }).subscribe((response)=>{
        resolve(response)
      })
    })
  }
}

