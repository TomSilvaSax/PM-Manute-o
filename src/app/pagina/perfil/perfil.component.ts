import { Component } from '@angular/core';
import { PostagemService } from '../../servicos/postagem.service';
import { Postagem } from '../../modelos/Postagem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

   // Construtor
constructor(private servicoPostagem:PostagemService){}

// Vetor de Postagens

postagens:Postagem[] = [];

// Ao iniciar (o componente é criado)
ngOnInit(){
  this.listarPostagens()
}

// Funcao para listar postaens
listarPostagens():void{
  this.servicoPostagem.listarPostagens()
  .subscribe(retorno => { 
    // console.table(retorno);
    this.postagens = retorno;
   })
}

}


function ngOnInit() {
throw new Error('Function not implemented.');
}
