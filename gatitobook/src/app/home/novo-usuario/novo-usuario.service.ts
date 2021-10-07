import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { environment } from './../../../environments/environment'
import { NovoUsuario } from './novo-usuario'

const API = environment.apiURL;
@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private httClient: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: NovoUsuario): Observable<any> {
    return this.httClient.post(`${API}/user/signup`, novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: string) {
    return this.httClient.get(`${API}/user/exists/${nomeUsuario}`);
  }
}
