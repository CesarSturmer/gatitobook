import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'

import { Comentarios } from './comentarios'
import { ComentariosService } from './comentarios.service'

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit {
  @Input() id!: number;

  @Output() AtualizaComentario = new EventEmitter();

  comentarios$!: Observable<Comentarios>;

  comentarioForm!: FormGroup;

  buttonControle: boolean = true;

  constructor(
    private comentarioService: ComentariosService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comentarios$ = this.comentarioService.buscarComentario(this.id);
    this.comentarioForm = this.formBuilder.group({
      comentario: ['', [Validators.maxLength(300), Validators.minLength(5)]],
    });
  }

  onkey(event: any) {
    if (event.target.value.length > 5) {
      this.buttonControle = false;
    }

    if (!event.target.value.length) {
      this.buttonControle = true;
    }
  }

  enviarComentario(): void {
    const comentario = this.comentarioForm.get('comentario')?.value ?? '';

    this.comentarios$ = this.comentarioService
      .incluirComentario(this.id, comentario)
      .pipe(
        switchMap(() => this.comentarioService.buscarComentario(this.id)),

        tap(() => {
          this.comentarioForm.reset();
          alert('Comentário foi Salvo com sucesso');
          this.AtualizaComentario.emit();
        })
      );
  }
}
