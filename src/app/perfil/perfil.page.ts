import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UtilsService } from '../services/utils.service';
import { UsersService, User } from '../services/users.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  isAvaliable = true;
  showComp = false;
  updateForm: FormGroup;
  uf: Array<any>;
  agreements: Array<any>;

  constructor(
    public formBuilder: FormBuilder,
    private utils: UtilsService,
    private userService: UsersService,
    private alertCtrl: AlertController
    ){ 
      this.loadUf();
      this.getAgreements();
      this.updateForm = this.formBuilder.group({
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
  ngOnInit() {
  }
  show(){
    this.showComp = !this.showComp;
    this.isAvaliable = !this.isAvaliable;
  }

  async getAgreements(){
    let agreements:Array<any> = await this.utils.getAgreements()
    this.agreements = agreements
  }
  
  async loadUf() {
    const states: Array<any> = await this.utils.getStates();
    this.uf = states;
  }

  cepKeyUp(val) {
    console.log(this.updateForm.value.cep, this.updateForm.value.cep.length);
    if (this.updateForm.value.cep.length === 8) {
        this.loadCEP(this.updateForm.value.cep);
    }
  }
  async loadCEP(cep) {
    console.log('PESQUISANDO CEP', cep);
    const cepC: {} = await this.utils.getCep(cep);
    console.log('ACHOU', cepC);
    this.inputDados(cepC);
  }
  inputDados(dados) {
    this.updateForm.controls.rua.setValue(dados.logradouro);
    this.updateForm.controls.bairro.setValue(dados.bairro);
    this.updateForm.controls.cidade.setValue(dados.localidade);
    this.updateForm.controls.estado.setValue(dados.uf);
  }
  async updateUser() {
    try {
      const value: User = this.parseUser(this.updateForm.value);
      const user: any = await this.userService.createUser(value);
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
      agreement: value.convenio,
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
