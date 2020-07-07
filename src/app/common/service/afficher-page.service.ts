import { Injectable } from '@angular/core';
import { Recette } from '../data/recette';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfficherPageService {

 
  

  public recupererRecetteById(idRecette) : Observable<Recette>{
    let url = "./recette-api/public/recette/"+ idRecette; //a verifier
    return this.http.get<Recette>(url);
  }

  constructor(private http: HttpClient) { }
}
