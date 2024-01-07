import { Component } from '@angular/core';
import { PostagemService } from '../../servicos/postagem.service';
import { Defeitos } from '../../modelos/Defeitos';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-carteira',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './carteira.component.html',
  styleUrl: './carteira.component.css'
})
export class CarteiraComponent {


   // Construtor
   constructor(private servicoPostagem:PostagemService){}

   // Vetor de Postagens
   
   defeitos:Defeitos[] = [];
   
   // Ao iniciar (o componente é criado)
   ngOnInit(){
     this.listarDefeitos()
   }
   
   // Funcao para listar postaens
   listarDefeitos():void{
     this.servicoPostagem.listarDefeitos()
     .subscribe(retorno => { 
       // console.table(retorno);
       this.defeitos = retorno;
      })
   }
   sair():void{
    localStorage.removeItem('email')
  }
   
   }
   
   
   function ngOnInit() {
   throw new Error('Function not implemented.');
   }