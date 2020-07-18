import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';
import { FavoriteService } from '../services/fav.service'
import { Observable } from "rxjs";
import { FavoriteRecipes } from '../auth/favoriterecipes'
import { Recette } from '../common/data/recette';
import * as html2pdf from 'html2pdf.js'
import * as jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import { AfficherPageService } from '../common/service/afficher-page.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  board: string;
  errorMessage: string;
  info: any;
  recettefavorite: FavoriteRecipes[];
  recettes: Recette[] = [];

  recipeId: string;
  isReadonly: boolean = true;
  //recupe par ID
  idRecette: string;


  constructor(public afficherPageService : AfficherPageService, private _router:Router, private userService: UserService, private token: TokenStorageService, public favoriteService: FavoriteService) {
  }

  ngOnInit() {
    this.recupererListIdFavoris()



    this.userService.getUserBoard().subscribe(
      data => {
        this.board = data;

      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
        this._router.navigate(['/'])
      }
    );

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),

    };

  }
//   isEmpty(obj) {
//     for(var key in obj) {
//         if(obj.hasOwnProperty(key))
//             return false;
//     }
//     return true;
// }

  recupererListIdFavoris() {
    let username = this.token.getUsername()

    console.log("le user " + username)
    this.favoriteService.getAllFavoriteRecipes(username).subscribe(
      data => {
        this.recettefavorite = data;
        // if(this.isEmpty(this.favoriteService)){
        //   console.log("liste viiiide ")
        // }else{
          this.recupererRecetteParId(data)
        // }
      });


  }


  recupererRecetteParId(recettefavorite: FavoriteRecipes[]) {
    for (let i = 0; i < recettefavorite.length; i++) {
      const element = recettefavorite[i];
      this.afficherPageService.recupererRecetteById(element.recipeId)
        .subscribe(recette => this.recettes.push(recette))
    }
  }

  logout() {
    this.token.signOut();
    window.location.reload()
  }


   //recuperer ID de recette
   recupererIdRecette(recette){
    this.idRecette =recette._id;
    sessionStorage.setItem("_id", this.idRecette);
    this._router.navigate(['/pageRecette', this.idRecette]);
    
  }
  
}
