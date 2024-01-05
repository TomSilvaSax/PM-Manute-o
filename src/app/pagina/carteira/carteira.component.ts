import { Component } from '@angular/core';
import { PostagemService } from '../../servicos/postagem.service';
import { Postagem } from '../../modelos/Postagem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carteira',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carteira.component.html',
  styleUrl: './carteira.component.css'
})
export class CarteiraComponent {


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