import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../common/service/recette.service';
import { Recette } from '../common/data/recette';


@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {
recettes: Recette[] 
  constructor(public recetteService : RecetteService) { }

  ngOnInit(): void {
    this.recetteService.recupererRecette()
    .subscribe(
      recette => {this.recettes = recette},
      error => { console.log(error)}
    )
  }

  // selectEvenement(evenement : Evenement){
  //   console.log('Vous avez sélectionné ' + evenement.titre);
  //   let link = ['/evenement', evenement.id];
  //   this.router.navigate(link);
  // }

}
