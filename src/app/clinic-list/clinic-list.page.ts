import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.page.html',
  styleUrls: ['./clinic-list.page.scss'],
})
export class ClinicListPage implements OnInit {
  clinics: Array<any> = [];
  constructor(private navParams: NavParams) {
    this.clinics = this.navParams.get('clinics');
    console.log(this.clinics);
  }

  ngOnInit() {
  }

}
