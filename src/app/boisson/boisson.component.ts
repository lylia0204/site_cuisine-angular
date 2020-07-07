import { Component, OnInit } from '@angular/core';
import { Recette } from '../common/data/recette';
import { RecetteService } from '../common/service/recette.service';

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.scss']
})
export class BoissonComponent implements OnInit {

  boisson : "boisson"
  recettes: Recette[] 
  constructor(public recetteService : RecetteService) { }

  ngOnInit(): void {
    this.recetteService.recupererRecetteBoisson()
    .subscribe(
      recette => {this.recettes = recette},
      error => { console.log(error)}
    )
  }
}