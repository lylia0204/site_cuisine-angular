import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetteComponent } from './recette/recette.component';
import { EntreeComponent } from './entree/entree.component';


const routes: Routes = [ 
  { path: 'recette', component: RecetteComponent },
  { path: 'entree', component: EntreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
