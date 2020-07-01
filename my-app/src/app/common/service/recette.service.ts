import { Injectable } from '@angular/core';
import { Recette } from '../data/recette';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecetteService {



  public recupererRecette() : Observable<Recette[]>{
    let url = "./recette-api/public/recette";
    return this.http.get<Recette[]>(url);
  }

  
  constructor(private http: HttpClient) { }

  
}
