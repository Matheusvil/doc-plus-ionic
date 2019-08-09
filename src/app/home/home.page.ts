import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginPage } from "../login/login.page"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  login= LoginPage;
  constructor(navCtr:NavController) {
    
  }   
}
