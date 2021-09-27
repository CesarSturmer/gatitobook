import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticacaoService } from './../../autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  usuario: string = '';
  senha: string = '';

  //atribui um metodo do tipo Router. E depois usar o navigate para ir até o path
  constructor(private authService: AutenticacaoService, private route: Router) { }

  ngOnInit(): void { }

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      (resp) => {
        this.route.navigate(['animais'])
      },
      (error) => {
        alert('Usuário ou senha inválido');
        console.log(error);
      }
    );
  }
}
