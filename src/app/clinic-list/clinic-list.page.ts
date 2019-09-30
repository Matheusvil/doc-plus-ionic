import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.page.html',
  styleUrls: ['./clinic-list.page.scss'],
})
export class ClinicListPage implements OnInit {
  clinics: Array<any> = [];
  constructor(private navParams: NavParams, private modalCtrl: ModalController) {
    this.clinics = this.navParams.get('clinics');
    console.log(this.clinics);
  }

  openClinicPerfil(clinic: any) {
    this.modalCtrl.dismiss(clinic);
  }

  ngOnInit() {
  }

}
