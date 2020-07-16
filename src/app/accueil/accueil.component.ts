import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../common/service/recette.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(public recetteService : RecetteService, private _router:Router) { }

  





  recupererRecetteParCategorie(categorie:string){

    sessionStorage.setItem("categorie", categorie);
    this._router.navigate(['/recetteCategorie']);
    console.log("categorie ===== "+categorie)
 
  }


  ngOnInit(): void {
  }

}
