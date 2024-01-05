import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postagem } from '../modelos/Postagem';
@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http:HttpClient) { }

  // URLs (deposi alterar pela URL do plano de manutencao)
  private urlPostagem:string = 'http://localhost:3000/defeitos'

  // Metodo para retornar todas as OSs 
  listarPostagens():Observable<Postagem[]>{
  
    return this.http.get<Postagem[]>(this.urlPostagem)
}
}
