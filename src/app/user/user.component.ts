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


  constructor(public afficherPageService: AfficherPageService, private router: Router, private userService: UserService, private token: TokenStorageService, public favoriteService: FavoriteService) {
  }

  ngOnInit() {
    this.recupererListIdFavoris()



    this.userService.getUserBoard().subscribe(
      data => {
        this.board = data;

      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
        this.router.navigate(['/'])
      }
    );

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),

    };

  }


  recupererListIdFavoris() {
    let username = this.token.getUsername()

    console.log("le user " + username)
    this.favoriteService.getAllFavoriteRecipes(username).subscribe(
      data => {
        this.recettefavorite = data;
        this.recupererRecetteParId(data)
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
}
