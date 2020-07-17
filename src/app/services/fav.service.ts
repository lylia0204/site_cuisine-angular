import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recette } from '../common/data/recette';
import { FavoriteRecipes } from '../auth/favoriterecipes';


@Injectable({
  providedIn: 'root'
})
export class  FavoriteService {

  private favUrl = 'http://localhost:8080/';
  
  
  constructor(private http: HttpClient) { }



  addFavoriteRecipesUser(username , recipeId): Observable<any> {
    return this.http.post(this.favUrl+ "api/user/favoriterecipe/add/"+ username +"/"+  recipeId,  {responseType:'text' as 'json'});
  }

  getAllFavoriteRecipes(username): Observable<FavoriteRecipes[]> {
    return this.http.get<FavoriteRecipes[]>(this.favUrl + "api/user/favoriterecipe/favoriterecipe/findall/"+ username)
  }

  getFavoriteMongo(recipeId : String) : Observable<Recette>{
    return this.http.get<Recette>(this.favUrl +"api/user/favoriterecipe/" + recipeId)

  }


}
