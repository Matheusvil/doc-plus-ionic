import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  loginForm: FormGroup;

  constructor(
    private navCtrl: NavController, 
    public formBuilder: FormBuilder,
    private auth: AuthenticationService
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
  async loginAuth(){
    const res:any = await this.auth.authorize(this.loginForm.value.email,this.loginForm.value.password)
    console.log(res)
  }
}
