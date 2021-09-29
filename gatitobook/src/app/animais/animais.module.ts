import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CartaoModule } from './../componentes/cartao/cartao.module'
import { AnimaisRoutingModule } from './animais-routing.module'
import { AnimalComponent } from './animal/animal.component'
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component'


@NgModule({
  declarations: [
    ListaAnimaisComponent,
    AnimalComponent,
    GradeFotosAnimaisComponent
  ],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    CartaoModule
  ]
})
export class AnimaisModule { }
