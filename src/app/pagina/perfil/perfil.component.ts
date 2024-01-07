import { Component } from '@angular/core';
import { PostagemService } from '../../servicos/postagem.service';
import { Defeitos } from '../../modelos/Defeitos';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

   // Construtor
constructor(private servicoPostagem:PostagemService){}

// Vetor de Postagens

defeitos:Defeitos[] = [];


formulario = new FormControl ({

})

// Ao iniciar (o componente é criado)
ngOnInit(){
  this.servicoPostagem.listarDefeitos()
  .subscribe(dados => this.listarDefeitos())
}

// Funcao para listar postaens
listarDefeitos():void{
  this.servicoPostagem.listarDefeitos()
  .subscribe(retorno => { 
    // console.table(retorno);
    this.defeitos = retorno;
   })
}

// Metrodo para cadastrar defeitos

cadastrar():void{
  this.servicoPostagem.cadastrarDefeitos(this.formulario.value as Defeitos )
  .subscribe(defeitos => {
    // cadastrar noo vetor de defeitos 
    this.defeitos.push(defeitos)

    // Limpar o formulario
    this.formulario.reset()
  })
}

// // Metodo para remover defeitos 
// remover(id:number ):void{
// // alert(id);
// this.postagens.remover(id)
// .subscribe(r => {

//   //  Encontrar a posicao do aluno no vetor 
//   let posicaoDefeito = this.postagens.findIndex(obj => {return obj.id === id})

//   // remover do vetor
//   this.postagens.splice(posicaoDefeito)
// })
// }




// Metodo para sair da plataforma
sair():void{
  localStorage.removeItem('email')
}

}


function ngOnInit() {
throw new Error('Function not implemented.');
}
