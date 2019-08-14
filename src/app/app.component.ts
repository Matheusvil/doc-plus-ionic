import { Component } from '@angular/core';

import { Platform, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
      onClick: () => this.navCtrl.navigateForward('/')
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page: Page): void {
    return;
  }
}
