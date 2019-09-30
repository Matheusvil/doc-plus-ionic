import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UsersService } from '../services/users.service';
import { ModalController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient,
    private userCtrl: UsersService,
  ) {}

  search(q: string, postion: {lat: string, lon: string}|null): Promise<any> {
    return new Promise(async (resolve) => {
      const token = await this.userCtrl.getToken();
      let lat: string, long: string;
      if (postion) {
        lat = postion.lat;
        long = postion.lon;
      }
      this.http.get(`${environment.api}api/clinic/search`, {
        headers: {
          authorization: `Bearer ${token}`
        },
        params: {
          q,
          lat,
          long
        }
      }).subscribe(
        (response: any) => {
          resolve(response);
        },
        (error) => {
          console.log(error);
          resolve({});
        }
      );
    });
  }
}
