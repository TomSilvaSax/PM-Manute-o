import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Defeitos, cadastroUsuarios } from '../modelos/Defeitos';
@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http:HttpClient) { }

  // URLs (depois alterar pela URL do plano de manutencao)
  private urlDefeitos:string = 'http://localhost:3000/defeitos'
  private urlCadastroUsuario:string = 'http://localhost:3000/cadastroUsuarios'

  // Metodo para retornar todas as OSs 
  listarDefeitos():Observable<Defeitos[]>{
  
    return this.http.get<Defeitos[]>(this.urlDefeitos)
}

 // Metodo para cadastrar defeitos
 cadastrarDefeitos(obj:Defeitos):Observable<Defeitos>{
  
  return this.http.post<Defeitos>(this.urlDefeitos, obj);
}

//  Metodo para remover defeitos
  removerDefeitos(id:number):Observable<any>{
  
  return this.http.delete<any>(`${this.urlDefeitos}/${id}`);
 }


//  Metodo para listar Solicitacoes de Cadastro

listarSolicitarCadastro():Observable<cadastroUsuarios[]>{
  
  
  return this.http.get<Defeitos[]>(this.urlCadastroUsuario)
}

// Metodo para solicitar cadastro

solicitarCadastro(obj:cadastroUsuarios):Observable<cadastroUsuarios>{
  
  return this.http.post<cadastroUsuarios>(this.urlCadastroUsuario, obj);
 }
     
// Metodo para remover usuarios

removerSolicitarCadastro(id:number):Observable<any>{
  
  return this.http.delete<any>(`${this.urlCadastroUsuario}/${id}`);
 }
}