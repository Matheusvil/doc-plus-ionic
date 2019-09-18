import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { UsersService, User } from '../services/users.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  disabled = true;
  showComp = false;
  uf: Array<any>;
  agreements: Array<any>;
  constructor(
    private utils: UtilsService,
    private userService: UsersService
    ){ 
      this.loadUf();
      this.getAgreements()
    }

  ngOnInit() {
  }
  
  show(){
    this.showComp = !this.showComp;
  }

  async getAgreements(){
    let agreements:Array<any> = await this.utils.getAgreements()
    this.agreements = agreements
  }
  
  async loadUf() {
    const states: Array<any> = await this.utils.getStates();
    this.uf = states;
  }
}
