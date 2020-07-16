import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../common/service/recette.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(public recetteService : RecetteService, private _router:Router) {
//     // override the route reuse strategy
//   this._router.routeReuseStrategy.shouldReuseRoute = function(){
//     return false;
//  }
//  this._router.events.subscribe((evt) => {
//     if (evt instanceof NavigationEnd) {
//        // trick the Router into believing it's last link wasn't previously loaded
//        this._router.navigated = false;
//        // if you need to scroll back to top, here is the right place
//        window.scrollTo(0, 0);
//     }
// });

   }

  





  recupererRecetteParCategorie(categorie:string){

    sessionStorage.setItem("categorie", categorie);
    this._router.navigate(['/recetteCategorie']);
    console.log("categorie ===== "+categorie)
 
  }


  ngOnInit(): void {
  }

}
