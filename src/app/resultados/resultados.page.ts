import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage{
  constructor(private navCtrl: NavController) {
  }
  openBuscarPage() {
    this.navCtrl.navigateForward('/result');
  }
}
