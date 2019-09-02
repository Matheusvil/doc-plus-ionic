import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/Authentication.service';
import { AlertController  } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    public formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private alertCtrl: AlertController
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
    });
  }
  openBuscarPage() {
    this.navCtrl.navigateForward('/buscar');
  }

  async loginAuth() {
      try {
        const res: any = await this.auth.authorize(this.loginForm.value.email, this.loginForm.value.password );
        this.openBuscarPage();
      } catch (error) {
          const alt = await this.alertCtrl.create({
            header: 'Erro',
            message: error.error.message
          });
          alt.present();
      }
  }
}
