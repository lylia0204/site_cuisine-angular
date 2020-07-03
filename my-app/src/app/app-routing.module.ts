import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetteComponent } from './recette/recette.component';
import { EntreeComponent } from './entree/entree.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DessertComponent } from './dessert/dessert.component';
import { PlatComponent } from './plat/plat.component';
import { BoissonComponent } from './boisson/boisson.component';
import { AperitifComponent } from './aperitif/aperitif.component';
import { PageRecetteComponent } from './page-recette/page-recette.component';


const routes: Routes = [ 
  { path: 'accueil', component : AccueilComponent},
  { path: '',  redirectTo: '/accueil',  pathMatch: 'full'},
  { path: 'entree', component: EntreeComponent },
  { path: 'plat', component: PlatComponent },
  { path: 'dessert', component: DessertComponent },
  { path: 'boisson', component: BoissonComponent },
  { path: 'aperitif', component: AperitifComponent },
  { path: 'recette', component: RecetteComponent },
  { path: 'pageRecette/:id', component: PageRecetteComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
