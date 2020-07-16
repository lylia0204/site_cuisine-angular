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

  constructor(public recetteService : RecetteService) { }


  ngOnInit(): void { 
    
    this.recupererRecettesCategorie(this.categorie);
    console.log("Liste recette de la categorie "+this.categorie)
  }

  recupererRecettesCategorie(categorie) {
    
    this.recetteService.recupererRecetteCategorie(categorie).subscribe(
        data => { this.recettes = data;
        console.log("liste de recette "+JSON.stringify(this.recettes))
        })
  }

}
