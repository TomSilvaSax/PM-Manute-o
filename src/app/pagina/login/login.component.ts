import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logim',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor (private rota:Router){}

  //  Formulario
   formulario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', Validators.required)
   });

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
}
