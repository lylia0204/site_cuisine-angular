import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recette } from '../common/data/recette';
import { FavoriteRecipes } from '../auth/favoriterecipes';


@Injectable({
  providedIn: 'root'
})
export class  FavoriteService {

  private favUrl = 'http://ec2-15-188-89-5.eu-west-3.compute.amazonaws.com:8886';
  
  
  constructor(private http: HttpClient) { }



  addFavoriteRecipesUser(username , recipeId): Observable<any> {
    return this.http.post(this.favUrl+ "/api/user/favoriterecipe/add/"+ username +"/"+  recipeId,  {responseType:'text' as 'json'});
  }

  getAllFavoriteRecipes(username): Observable<FavoriteRecipes[]> {
    return this.http.get<FavoriteRecipes[]>(this.favUrl + "/api/user/favoriterecipe/findall/"+ username)
  }


  deleteFavRecipe(username , recipeId): Observable<any> {
    return this.http.delete(this.favUrl+ "/api/user/favoriterecipe/delete/"+ username +"/"+  recipeId,  {responseType:'text' as 'json'});
  }


}
