import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostagemService } from '../../servicos/postagem.service';
import { cadastroUsuarios } from '../../modelos/Defeitos';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
// Metodo parea sair da plataforma 
  sair():void{
    localStorage.removeItem('email')
  }

  
  solicitarCadastro:cadastroUsuarios[] = []

  formulario = new FormGroup({

     nome: new FormControl(''),
     email: new FormControl(''),
     Usuario: new FormControl(''),
     Empresa: new FormControl(''),
     matricula: new FormControl(''),
     senha: new FormControl('')

  })

  constructor(private servico:PostagemService){};


  // Apos renderizar o componente

  ngOnInit(){
    this.servico.listarSolicitarCadastro()
    .subscribe(dados => this.solicitarCadastro = dados)
  }
 
// Metoro para excluir

remover(id:number):void{
  // alert(id)
this.servico.removerSolicitarCadastro(id)
.subscribe(r => {
// Encontrar a posicao do aluno no vetor

let posicaoUsuario = this.solicitarCadastro.findIndex(obj => { return obj.id === id});
this.solicitarCadastro.splice(posicaoUsuario, 1);
});
}
}
