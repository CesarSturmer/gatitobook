import { Injectable } from '@angular/core'
import jwt_decode from 'jwt-decode'
import { BehaviorSubject } from 'rxjs'

import { TokenService } from './../token.service'
import { Usuario } from './usuario'

@Injectable({
  providedIn: 'root',
})

//enviar e notificar todos os componentes sobre essas informações
//Subject é um OBSERVABLE. ele recebe informações e pode enviar informações
export class UsuarioService {
  //Varios tipos de SUBJECT, BehaviorSubject ele envia o ultimo dado que estava nele. Ele guarda estados
  private usuarioSubject = new BehaviorSubject<Usuario>({});

  //injetando o serviço de token
  //
  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT();
    }
  }

  private decodificaJWT() {
    const token = this.tokenService.retornaToken();

    const usuario = jwt_decode(token) as Usuario;

    this.usuarioSubject.next(usuario);
  }

  // metodo para ele se tornar um observable(asObservable), para perder a habilidade de enviar informação, sendo assim só recebe
  retornaUsuario() {
    return this.usuarioSubject.asObservable();
  }

  //toda vez que tem um token novo eu preciso notificar todos meus componentes que tenho um token novo
  salvaToken(token: string) {
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout() {
    this.tokenService.excluiToken();
    this.usuarioSubject.next({});
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }
}
