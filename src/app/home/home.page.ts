import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController) {
  }
  openLoginPage() {
    this.navCtrl.navigateForward('/login');
  }
  openCadastroPage() {
    this.navCtrl.navigateForward('/cadastro');
  }
}
