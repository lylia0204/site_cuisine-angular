import { Component, OnInit } from '@angular/core';
import { Recette } from '../common/data/recette';
import { RecetteService } from '../common/service/recette.service';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.scss']
})
export class DessertComponent implements OnInit {

  dessert : "dessert"
  recettes: Recette[] 
  constructor(public recetteService : RecetteService) { }

  ngOnInit(): void {
    this.recetteService.recupererRecetteDessert()
    .subscribe(
      recette => {this.recettes = recette},
      error => { console.log(error)}
    )
  }
}