import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecetteService } from '../common/service/recette.service';
import { AfficherPageService } from '../common/service/afficher-page.service';
import { Recette } from '../common/data/recette';
import { Router } from '@angular/router';




@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {
recettes: Recette[] 
idRecette: string;



  constructor(public recetteService : RecetteService, public afficherPageService : AfficherPageService, private _router:Router) { }

  recupererIdRecette(recette){
    this.idRecette =recette._id;
    console.log("===========id"+this.idRecette)
    sessionStorage.setItem("_id", this.idRecette);
    this._router.navigate(['/pageRecette', this.idRecette]);
    
  }

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
