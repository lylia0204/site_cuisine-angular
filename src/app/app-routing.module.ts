import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetteComponent } from './recette/recette.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PageRecetteComponent } from './page-recette/page-recette.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RecetteCategorieComponent } from './recette-categorie/recette-categorie.component';
import { RecetteRechercheComponent } from './recette-recherche/recette-recherche.component';



const routes: Routes = [ 
  { path: 'accueil', component : AccueilComponent},
  { path: '',  redirectTo: '/accueil',  pathMatch: 'full'},
  { path: 'recette', component: RecetteComponent },
  { path: 'recetteRecherche/:nom', component: RecetteRechercheComponent },
  { path: 'recetteCategorie/:categorie', component: RecetteCategorieComponent },
  { path: 'pageRecette/:id', component: PageRecetteComponent },
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
