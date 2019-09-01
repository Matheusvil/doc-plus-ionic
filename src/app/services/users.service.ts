import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

export interface User{
  email:String,
  password:String,
  name:String,
  birthDay:Date,
  address:{
    state:String,
    city:String,
    street:String,
    neighborhood:String,
    number:String,
    complement:String,
    zip:String
  },
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
   }
  
  createUser(value:User){
    return new Promise((resolve, reject)=>{
      this.http.post(environment.api+'api/me', value).subscribe(
        (response:any)=>{resolve(response)},
        (error:any)=>{reject(error)}
      )
    })
  }
}
