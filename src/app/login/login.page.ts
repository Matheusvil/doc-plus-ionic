import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  loginForm: FormGroup;

  constructor(
    private navCtrl: NavController, 
    public formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30) 
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(90)
      ]))
    })
  }
  openBuscarPage() {
    this.navCtrl.navigateForward('/buscar');
  }
}
