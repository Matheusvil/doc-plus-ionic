import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage{
  constructor(private navCtrl: NavController) {
  }
  openBuscarPage() {
    this.navCtrl.navigateForward('/buscar');
  }

}
