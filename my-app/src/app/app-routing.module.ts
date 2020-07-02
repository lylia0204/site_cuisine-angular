import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetteComponent } from './recette/recette.component';
import { EntreeComponent } from './entree/entree.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [ 
  { path: 'recette', component: RecetteComponent },
  { path: 'entree', component: EntreeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'user',component: UserComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'signup',component: RegisterComponent},
  {path: 'home',component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
