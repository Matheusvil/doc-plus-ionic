import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginPage } from "../login/login.page";
import { CadastroPage } from "../cadastro/cadastro.page";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  login= LoginPage;
  cadastro= CadastroPage;
  constructor(navCtr:NavController) {
  }   
}
