import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) {

  }
  async getStates():Promise<Array<any>>{
    return new Promise((resolve)=>{
      this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').subscribe(
        (response:any[])=>{
          resolve(response.sort((a, b)=>{
            if(a == b) return 0
            if(a < b) return -1
            return 1
          }))
        },
        (error)=>{
          resolve([])
        }
      )
    }) 
  }
  async getCep(cep):Promise<Object>{
    return new Promise((resolve)=>{
      this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe(
        (response:Object)=>{
          resolve(response)
        },
        (error)=>{
          resolve({})
        }
      )
    })
  }
  getAgreements():Promise<Array<any>>{
    return new Promise((resolve)=>{
      this.http.get(`${environment.api}api/agreement/all`).subscribe(
        (response:Array<any>)=>{
          resolve(response)
        },
        (error)=>{
          resolve([])
        }
      )
    })
  }
}
