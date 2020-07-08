import { Injectable } from '@angular/core';
import { Recette } from '../data/recette';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
 
  preUrl = "http://ec2-15-188-47-179.eu-west-3.compute.amazonaws.com:8887/"

  public recupererRecette() : Observable<Recette[]>{
    let url = this.preUrl+"/recette-api/public/recettes";
    return this.http.get<Recette[]>(url);
  }
  public recupererRecetteEntree() : Observable<Recette[]>{
    let url = this.preUrl+"/recette-api/public/recette?cat_=entree";
    return this.http.get<Recette[]>(url);
  }

  public recupererRecetteDessert() : Observable<Recette[]>{
    let url = this.preUrl+"/recette-api/public/recette?cat_=dessert";
    return this.http.get<Recette[]>(url);
  }
  
  public recupererRecettePlat() : Observable<Recette[]>{
    let url = this.preUrl +"/recette-api/public/recette?cat_=plat";
    return this.http.get<Recette[]>(url);
  }

  public recupererRecetteBoisson() : Observable<Recette[]>{
    let url = this.preUrl +"/recette-api/public/recette?cat_=boisson";
    return this.http.get<Recette[]>(url);
  }

  public recupererRecetteAperitif() : Observable<Recette[]>{
    let url = this.preUrl +"/recette-api/public/recette?cat_=aperitif";
    return this.http.get<Recette[]>(url);
  }

  
  constructor(private http: HttpClient) { }

  
}
