import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { AnimaisService } from '../../animais.service'
import { environment } from './../../../../environments/environment'
import { Comentario, Comentarios } from './comentarios'

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  constructor(private htt: HttpClient, private comentariosTeste: AnimaisService) {}

  buscarComentario(id: number): Observable<Comentarios> {
    return this.htt.get<Comentarios>(`${API}/photos/${id}/comments`);
  }

  incluirComentario(id: number, commentText: string): Observable<Comentario> {
    return this.htt.post<Comentario>(`${API}/photos/${id}/comments`, {
      commentText,
    });
  }
}
