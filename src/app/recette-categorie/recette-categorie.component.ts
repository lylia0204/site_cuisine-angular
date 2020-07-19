import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../common/service/recette.service';
import { AfficherPageService } from '../common/service/afficher-page.service';
import { Recette } from '../common/data/recette';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recette-categorie',
  templateUrl: './recette-categorie.component.html',
  styleUrls: ['./recette-categorie.component.scss']
})
export class RecetteCategorieComponent implements OnInit {

  recettes : Recette[]
  categorie = sessionStorage.getItem("categorie");
  idRecette: string;

  //pagination
  pageActuelle: number = 1;
  
  constructor(public recetteService : RecetteService, public afficherPageService : AfficherPageService, private _router:Router) { }


  ngOnInit(): void { 
    //recuperer liste recette par categorie
    this.recupererRecettesCategorie(this.categorie);
  }

  recupererRecettesCategorie(categorie) {
    this.recetteService.recupererRecetteCategorie(categorie).subscribe(
        data => { this.recettes = data;
        this.randomize(this.recettes)
        })
  }

  //recuperer ID de recette
  recupererIdRecette(recette){
    this.idRecette =recette._id;
    sessionStorage.setItem("_id", this.idRecette);
    this._router.navigate(['/pageRecette', this.idRecette]);
    
  }

  //melanger les donnee d'un tableau
  randomize(tab) {
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    return tab;
}
  

}
