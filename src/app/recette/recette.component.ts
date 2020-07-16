import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecetteService } from '../common/service/recette.service';
import { AfficherPageService } from '../common/service/afficher-page.service';
import { Recette } from '../common/data/recette';
import { Router } from '@angular/router';
import * as AOS from 'aos'
import { AotSummaryResolver } from '@angular/compiler';



@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})

export class RecetteComponent implements OnInit {

  recettes: Recette[] 
  idRecette: string;



  constructor(public recetteService : RecetteService, public afficherPageService : AfficherPageService, private _router:Router) { }

  //recuperer ID de recette
  recupererIdRecette(recette){
    this.idRecette =recette._id;
    sessionStorage.setItem("_id", this.idRecette);
    this._router.navigate(['/pageRecette', this.idRecette]);
    
  }
  

  ngOnInit(): void {

    //Animation sur les portfolio
    AOS.init();

    //recuperer toutes les recettes
    this.recetteService.recupererRecette()
    .subscribe(
      recette => {this.recettes = recette},
      error => { console.log(error)}
    )
  }

}
