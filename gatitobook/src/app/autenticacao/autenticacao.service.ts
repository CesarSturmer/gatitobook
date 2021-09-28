import { HttpClient, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

import { UsuarioService } from './usuario/usuario.service'

//essa notação angular, que indica que essa classe pode ser injetada em outro componente, em outro serviço
@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) { }

  //OBJETO do tipo observable, é uma promisse javascrip, quando a requisição terminar ele vai retonar o objeto que definir
  //dentro do observable
  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(
      'http://localhost:3000/user/login',
      {
        userName: usuario,
        password: senha,
      },
      { observe: 'response' }
    ).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(authToken)
      })
    )
  }
}
