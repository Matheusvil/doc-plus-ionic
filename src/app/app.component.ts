import { Component } from '@angular/core';

import { Platform, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UsersService } from './services/users.service';
import { Router } from '@angular/router';
import { AuthenticationService  } from './services/authentication.service';

interface Page {
  nome: string;
  onClick(): void;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  pages: Array<Page> = [
    {
      nome: 'Perfil',
      onClick: () => this.navCtrl.navigateForward('/perfil')
    },
    {
      nome: 'Conversas',
      onClick: () => this.navCtrl.navigateForward('/contatos')
    },
    {
      nome: 'Histórico',
      onClick: () => this.navCtrl.navigateForward('/historico')
    },
    {
      nome: 'Resultados',
      onClick: () => this.navCtrl.navigateForward('/resultados')
    },
    {
      nome: 'Sair',
      onClick: () => this.logout()
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private userService: UsersService,
    private router: Router,
    private authentication: AuthenticationService
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(async () => {
      const token = await this.userService.getToken();
      if (token) {
        this.router.navigateByUrl('buscar');
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page: Page): void {
    return;
  }

  logout() {
    this.authentication.logout();
    this.navCtrl.navigateForward('/');
  }
}
