import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-clinica',
  templateUrl: './perfil-clinica.page.html',
  styleUrls: ['./perfil-clinica.page.scss'],
})
export class PerfilClinicaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  openChatPage() {
    this.navCtrl.navigateForward('/chat');
  }

  openAgendaPage() {
    this.navCtrl.navigateForward('/agenda');
  }

}
