import { CanActivateFn, Router } from '@angular/router';


export const autenticadorGuard: CanActivateFn = (route, state) => {

  // importar a classe Router 
  const rota = new Router;

  //  Validacao
  if(localStorage.getItem('email') == undefined){
    rota.navigateByUrl('/login');
  }

  return true;
};
