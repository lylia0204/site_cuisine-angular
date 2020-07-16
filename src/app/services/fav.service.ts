import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private favUrl = 'http://localhost:8080';
  
  
  constructor(private http: HttpClient) { }

  addFavoriteRecipes(favoriterecipes : any) : Observable<any> {
    return this.http.post(this.favUrl +"/api/user/favoriterecipe/ajouter", favoriterecipes);
  }


  addFavoriteRecipesUser(username , recipeId): Observable<any> {
    return this.http.post(this.favUrl+ "api/user/favoriterecipe/add"+ recipeId + username, { responseType: 'text' });
  }

  getAllFavoriteRecipes(username): Observable<any> {
    return this.http.get(this.favUrl + "api/user/favoriterecipe/favoriterecipe/findall"+ username)
  }



}
