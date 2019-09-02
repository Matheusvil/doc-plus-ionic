import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UtilsService } from '../services/utils.service';
import { UsersService, User } from '../services/users.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {

  cadastroForm: FormGroup;
  uf: Array<any>;
  constructor(
    private navCtrl: NavController,
    public formBuilder: FormBuilder,
    private utils: UtilsService,
    private userService: UsersService,
    private alertCtrl: AlertController
  ) {
    this.loadUf();
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
    });
  }
  openBuscarPage() {
    this.navCtrl.navigateForward('/buscar');
  }

  async loadUf() {
      const states: Array<any> = await this.utils.getStates();
      this.uf = states;
  }
  cepKeyUp(val) {
    console.log(this.cadastroForm.value.cep, this.cadastroForm.value.cep.length);
    if (this.cadastroForm.value.cep.length === 8) {
        this.loadCEP(this.cadastroForm.value.cep);
    }
  }
  async loadCEP(cep) {
    console.log('PESQUISANDO CEP', cep);
    const cepC: {} = await this.utils.getCep(cep);
    console.log('ACHOU', cepC);
    this.inputDados(cepC);
  }
  inputDados(dados) {
    this.cadastroForm.controls.rua.setValue(dados.logradouro);
    this.cadastroForm.controls.bairro.setValue(dados.bairro);
    this.cadastroForm.controls.cidade.setValue(dados.localidade);
    this.cadastroForm.controls.estado.setValue(dados.uf);
  }
  async createUser() {
    try {
      const value: User = this.parseUser(this.cadastroForm.value);
      const user: any = await this.userService.createUser(value);
      this.openBuscarPage();
    } catch (err) {
        const alt = await this.alertCtrl.create({
            header: 'Error',
            message: err.error.message,
            buttons: ['OK']
        });
        await alt.present();
    }
  }
  parseUser(value: any): User {
    return{
      name: value.nome,
      birthDay: value.data,
      email: value.email,
      password: value.password,
      address: {
        city: value.cidade,
        complement: value.complenento || '',
        neighborhood: value.bairro,
        number: value.numero,
        state: value.estado,
        street: value.rua,
        zip: value.cep
      }
    };
  }
}
