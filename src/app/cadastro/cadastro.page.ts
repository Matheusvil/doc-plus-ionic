import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage{

  cadastroForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {
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
      cpf: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ])),
      endereco: new FormControl('', Validators.compose([
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
    })
  }
  openBuscarPage() {
    this.navCtrl.navigateForward('/buscar');
  }

}
