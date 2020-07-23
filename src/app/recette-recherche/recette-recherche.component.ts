import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
import { Recette } from '../common/data/recette';
import { RechercheService } from '../common/service/recherche.service';
import { AfficherPageService } from '../common/service/afficher-page.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recette-recherche',
  templateUrl: './recette-recherche.component.html',
  styleUrls: ['./recette-recherche.component.scss']
})
export class RecetteRechercheComponent implements OnInit {

  recettes: Recette[] 
  nomRecherche = sessionStorage.getItem("nom");
  //recupe par ID
  idRecette: string;
  //pagination
  pageActuelle: number = 1;
  //retour recherche vide
  messageListeVide: boolean;


  constructor(public rechercheService : RechercheService, public afficherPageService : AfficherPageService, private _router:Router) { }

  ngOnInit(): void {
     //Animation sur les portfolio
     AOS.init();

     //chercher par nom
     this.rechercherParNom(this.nomRecherche);
 
  }
  rechercherParNom(nom) {
    this.rechercheService.rechercherParNom(nom).subscribe(
        data => { this.recettes = data;
           if(this.isEmpty(this.recettes)){
          console.log("liste viiiide ")
          this.messageListeVide = true;
        }else{
          return this.recettes
        }
        console.log("liste de recette "+JSON.stringify(this.recettes))
        })
  }
 

   //recuperer ID de recette
   recupererIdRecette(recette){
    this.idRecette =recette._id;
    sessionStorage.setItem("_id", this.idRecette);
    this._router.navigate(['/pageRecette', this.idRecette]);
    
  }
    isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

}
