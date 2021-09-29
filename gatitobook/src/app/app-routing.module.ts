import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AutenticacaoGuard } from './autenticacao/autenticacao.guard'
import { LoginGuard } from './autenticacao/login.guard'

//pathMatch tira os espaços em brancos
//lazyload = sob-demanda (tradução livre)
//lazyload: loadChildren atributo,
//no momento que o usuario acessar essa rota, ele vai executar essa função para requisitar o módulo sob de manda,
//ou seja somente quando o usuario acessar essa rota.
//ela retornar uma promisse. e ele retornar um módulo.
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canLoad: [LoginGuard],
  },
  {
    path: 'animais',
    loadChildren: () =>
      import('./animais/animais.module').then((m) => m.AnimaisModule),
    canLoad: [AutenticacaoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
