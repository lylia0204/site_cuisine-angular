import { Component, OnInit } from '@angular/core';
import { Recette } from '../common/data/recette';
import { RecetteService } from '../common/service/recette.service';

@Component({
  selector: 'app-aperitif',
  templateUrl: './aperitif.component.html',
  styleUrls: ['./aperitif.component.scss']
})
export class AperitifComponent implements OnInit {

  aperitif : "aperitif"
  recettes: Recette[] 
  constructor(public recetteService : RecetteService) { }

  ngOnInit(): void {
    this.recetteService.recupererRecetteAperitif()
    .subscribe(
      recette => {this.recettes = recette},
      error => { console.log(error)}
    )
  }
}