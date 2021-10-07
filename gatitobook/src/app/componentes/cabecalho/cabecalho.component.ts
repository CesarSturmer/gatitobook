import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { UsuarioService } from './../../autenticacao/usuario/usuario.service'

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit {
  user$ = this.usuarioService.retornaUsuario();

  estaLogado!: boolean;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {
    this.user$.subscribe((res) => {
      if (res.id) {
        this.estaLogado = true;
      } else {
        this.estaLogado = false;
      }
    });
  }
  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}
