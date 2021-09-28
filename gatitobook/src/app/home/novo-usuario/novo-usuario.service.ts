import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})

//classe
export class NovoUsuarioService {

  //constructor da classe
  constructor(private httClient: HttpClient) { }

  //metodo da classe
  cadastraNovoUsuario(novoUsuario: NovoUsuario): Observable<any> {
    return this.httClient.post('http://localhost:3000/user/signup', novoUsuario)
  }

  verificaUsuarioExistente(nomeUsuario: string) {
    return this.httClient.get(`http://localhost:3000/user/exists/${nomeUsuario}`)
  }
}
