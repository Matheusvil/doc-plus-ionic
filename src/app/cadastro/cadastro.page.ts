import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { UtilsService } from '../services/utils.service'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage{

  cadastroForm: FormGroup;
  uf: Array<any>;
  constructor(
    private navCtrl: NavController,
    public formBuilder: FormBuilder,
    private utils: UtilsService 
  ) {
    this.loadUf()
    this.cadastroForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30) 
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(90)
      ])),
      nome: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(90)
      ])),
      data: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ])),
      rua: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      bairro: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      cidade: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      estado: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      convenio: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      cep: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ])),
      numero: new FormControl('', Validators.compose([
        Validators.required,
      ]))
    })
  }
  openBuscarPage() {
    this.navCtrl.navigateForward('/buscar');
  }

  async loadUf(){
    const states:Array<any> = await this.utils.getStates()
    this.uf = states
    console.log(this.uf)
  }
}
