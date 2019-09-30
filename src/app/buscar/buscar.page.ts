import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { UtilsService } from '../services/utils.service';
import { SearchService } from '../api/search.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ClinicListPage } from '../clinic-list/clinic-list.page';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  query: string;
  services: Array<any>;
  postion: {lat: string, lon: string};
  constructor(
    private menu: MenuController,
    private utils: UtilsService,
    private searchApi: SearchService,
    private geolocaion: Geolocation,
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) {
    this.loadServices();
    this.loadPosition();
  }

  async loadServices() {
    const services: Array<any> = await this.utils.getServices();
    this.services = services;
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  ngOnInit() {
  }

  async search() {
    if (!this.query) {
      return;
    }
    const response = await this.searchApi.search(this.query, this.postion);
    if (response.clinics.length > 0) {
      const modal = await this.modalCtrl.create({
        component: ClinicListPage,
        componentProps: {
          clinics: response.clinics
        }
      });
      modal.onDidDismiss().then((val) => {
        if (val.data) {
          this.navCtrl.navigateForward(`perfil-clinica/:${val.data._id}`);
        }
      });
      await modal.present();
    }
  }

  searchByService(service: string) {
    this.query = service;
    this.search();
  }

  async loadPosition() {
    const pos = await this.geolocaion.getCurrentPosition();
    this.postion = {
      lat: pos.coords.latitude.toFixed(7) ,
      lon: pos.coords.longitude.toFixed(7)
    };
  }
}
