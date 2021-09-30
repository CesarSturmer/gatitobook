import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Animais } from './../animais'

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  //nao está estanciando, apenas declarando !:
  animais!: Animais;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.animais = this.activatedRoute.snapshot.data['animais'];
    });
  }
}
