import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'perfil-clinica/:id', loadChildren: './perfil-clinica/perfil-clinica.module#PerfilClinicaPageModule' },
  { path: 'calendario', loadChildren: './calendario/calendario.module#CalendarioPageModule' },
  { path: 'historico', loadChildren: './historico/historico.module#HistoricoPageModule' },
  { path: 'contatos', loadChildren: './contatos/contatos.module#ContatosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
