import { Injectable } from '@angular/core';
import { Recette } from '../data/recette';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
 
  preUrl = "http://ec2-15-188-89-5.eu-west-3.compute.amazonaws.com:8887"
  // preUrl = "http://localhost:8887"


  public recupererRecette() : Observable<Recette[]>{
    let url = this.preUrl+"/recette-api/public/recettes";
    return this.http.get<Recette[]>(url);
  }
  
  public recupererRecetteCategorie(categorie:string) : Observable<Recette[]>{
    let url = this.preUrl+"/recette-api/public/recette?cat_="+categorie;
    return this.http.get<Recette[]>(url);
  }

  
  constructor(private http: HttpClient) { }

  
}
