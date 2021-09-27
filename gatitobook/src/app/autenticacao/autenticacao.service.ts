import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//essa notação angular, que indica que essa classe pode ser injetada em outro componente, em outro serviço
@Injectable({
  providedIn: 'root',
})


export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }

  //OBJETO do tipo observable, é uma promisse javascrip, quando a requisição terminar ele vai retonar o objeto que definir
  //dentro do observable
  autenticar(usuario: string, senha: string): Observable<any> {
    return this.httpClient.post('http://localhost:3000/user/login', {
      userName: usuario,
      password: senha,
    });
  }
}
