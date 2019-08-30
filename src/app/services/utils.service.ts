import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
