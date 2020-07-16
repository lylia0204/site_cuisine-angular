import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';
import {FavoriteService} from '../services/fav.service'
import { Observable } from "rxjs";
import { FavoriteRecipes} from '../auth/favoriterecipes'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  board: string;
  errorMessage: string;
  info: any;
  recettefavorite: Observable<FavoriteRecipes>;

  constructor(private router: Router, private userService: UserService, private token: TokenStorageService, public favoriteService : FavoriteService) { }

  ngOnInit() {
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

recuperertousfav(idRecipe){
this.recettefavorite = this.favoriteService.getAllFavoriteRecipes(idRecipe);
  
  }
logout() {
  this.token.signOut();
  window.location.reload()   
}
}
