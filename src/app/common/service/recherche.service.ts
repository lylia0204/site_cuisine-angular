import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recette } from '../data/recette';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {


//  preUrl = "http://ec2-15-188-89-5.eu-west-3.compute.amazonaws.com:8887"
   preUrl = "http://localhost:8887"
  
  // traitementNomRecherche(nom : string){
  //   let tabNom : string[] = nom.split(' ')

  //   return tabNom
  // }

  public rechercherParNom(nom:string) : Observable<Recette[]>{
    let url = this.preUrl+"/recette-api/public/searchrecette?search="+nom;
    return this.http.get<Recette[]>(url);
  }

  
  public rechercherParIngredient(in1:string, in2:string, in3:string) : Observable<Recette[]>{

    let url = this.preUrl+"/recette-api/public/searchin?in1="+in1+"&in2="+in2+"&in3="+in3;
    return this.http.get<Recette[]>(url);
  }

  public rechercherAvecSansIngredient(rqt:string, avec:string, sans:string) : Observable<Recette[]>{

    let url = this.preUrl+"/recette-api/public/searchas?rqt="+rqt+"&avec="+avec+"&sans="+sans;
    return this.http.get<Recette[]>(url);
  }
  

  constructor(private http: HttpClient) { }
}
