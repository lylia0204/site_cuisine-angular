import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recette } from '../data/recette';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {


  preUrl = "http://localhost:8887/"
  
  // traitementNomRecherche(nom : string){
  //   let tabNom : string[] = nom.split(' ')

  //   return tabNom
  // }

  public rechercherParNom(nom:string) : Observable<Recette[]>{
    let url = this.preUrl+"/recette-api/public/searchrecette?search="+nom;
    return this.http.get<Recette[]>(url);
  }

  

  constructor(private http: HttpClient) { }
}
