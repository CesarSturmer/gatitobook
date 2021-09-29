import { CommonModule } from '@angular/common'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'

import { AutenticacaoInterceptor } from './autenticacao.interceptor'

//provide = criar um serviço do tipo httpreceptor

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true //padrao o angular entender uma única classe de interceptor, dessa forma ele poderia ter vários interceptor.
    }
  ]
})
export class AutenticacaoModule { }
