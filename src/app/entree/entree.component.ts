import { Component, OnInit } from '@angular/core';
import { Recette } from '../common/data/recette';
import { RecetteService } from '../common/service/recette.service';

@Component({
  selector: 'app-entree',
  templateUrl: './entree.component.html',
  styleUrls: ['./entree.component.scss']
})
export class EntreeComponent implements OnInit {

  entree : "entree"
  recettes: Recette[] 
  constructor(public recetteService : RecetteService) { }

  ngOnInit(): void {
    this.recetteService.recupererRecetteEntree()
    .subscribe(
      recette => {this.recettes = recette},
      error => { console.log(error)}
    )
  }

}
