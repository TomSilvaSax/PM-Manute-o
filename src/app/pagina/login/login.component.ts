import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PostagemService } from '../../servicos/postagem.service';
import { cadastroUsuarios } from '../../modelos/Defeitos';

@Component({
  selector: 'app-logim',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 

  constructor(private servicoPostagem:PostagemService, private rota:Router){}

  solicitarCadastro:cadastroUsuarios[] = []
  

  //  Formulario
   formulario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', Validators.required)
   });

   formularioSolicitarCadastro = new FormGroup({

    nome: new FormControl(''),
    email: new FormControl(''),
    Usuario: new FormControl(''),
    Empresa: new FormControl(''),
    matricula: new FormControl(''),
    senha: new FormControl('')

 })

  //  Funcao para autenticar

  autenticar():void{
    if(
      this.formulario.value.email === 'contato@tom.com'
      &&
      this.formulario.value.senha === '123'

    ){

      localStorage.setItem('email', this.formulario.value.email);
      
      this.rota.navigateByUrl('/perfil')
    }
    else
    {
      alert('E-mail ou senha incorreto.')
    }
  }
  
// Ao iniciar (o componente é criado)
ngOnInit(){
  this.servicoPostagem.listarSolicitarCadastro()
  .subscribe(cadastro => this.listarSolicitacoes)
}

// Funcao para listar postaens
listarSolicitacoes():void{
  this.servicoPostagem.listarSolicitarCadastro()
  .subscribe(solicitacoes => { 
    // console.table(retorno);
    this.solicitarCadastro = solicitacoes;
   })
}
 cadastrar():void{
  this.servicoPostagem.solicitarCadastro(this.formularioSolicitarCadastro.value as cadastroUsuarios)
  .subscribe(cadastro => {
    // cadastrar noo vetor de defeitos 
    this.solicitarCadastro.push(cadastro)

     // Limpar o formulario
     this.formularioSolicitarCadastro.reset()
     alert("Solicitaçåo comcluida com sucesso")
  
  })

 }

 mostrarDiv1: boolean = true;
 
 alternarDivs() {
  this.mostrarDiv1 = !this.mostrarDiv1;
}
 
}
