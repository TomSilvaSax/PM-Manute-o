import { Routes } from '@angular/router';
import { LoginComponent } from './pagina/login/login.component';
import { PerfilComponent } from './pagina/perfil/perfil.component';
import { autenticadorGuard } from './seguranca/autenticador.guard';


export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'perfil', component:PerfilComponent, canActivate:[autenticadorGuard]},
    {path:'', redirectTo:'/login', pathMatch:'full'},

];
