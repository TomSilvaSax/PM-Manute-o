import { Routes } from '@angular/router';
import { LoginComponent } from './pagina/login/login.component';
import { PerfilComponent } from './pagina/perfil/perfil.component';
import { autenticadorGuard } from './seguranca/autenticador.guard';
import { CarteiraComponent } from './pagina/carteira/carteira.component';
import { AdminComponent } from './pagina/admin/admin.component';



export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'perfil', component:PerfilComponent, canActivate:[autenticadorGuard]},
    {path:'carteira', component:CarteiraComponent, canActivate:[autenticadorGuard]},
    {path:'admin', component:AdminComponent, canActivate:[autenticadorGuard]},
    {path:'', redirectTo:'/login', pathMatch:'full'},

];
