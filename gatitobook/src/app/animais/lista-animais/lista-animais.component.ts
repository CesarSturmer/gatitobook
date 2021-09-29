import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'

import { UsuarioService } from './../../autenticacao/usuario/usuario.service'
import { Animais } from './../animais'
import { AnimaisService } from './../animais.service'

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  //nao está estanciando, apenas declarando !:
  animais$!: Observable<Animais>;

  constructor(
    private usuarioService: UsuarioService,
    private animaisService: AnimaisService
  ) { }

  //dentro de pipe pode usar operadores rjs ( funções que manipulam o fluxo de informações dentro de um OBSERVABLE)
  ngOnInit(): void {
    this.animais$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.animaisService.listaDoUsuario(userName); // precisar ter um retorno switchMap
      })
    );
  }
}
