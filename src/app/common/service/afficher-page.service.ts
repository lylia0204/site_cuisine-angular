import { Injectable } from '@angular/core';
import { Recette } from '../data/recette';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfficherPageService {

<<<<<<< HEAD
  preUrl = "http://ec2-15-188-47-179.eu-west-3.compute.amazonaws.com:8887/"
  

  public recupererRecetteById(idRecette) : Observable<Recette>{
    let url = this.preUrl +"/recette-api/public/recette/"+ idRecette; //a verifier
=======
 
  preUrl = "http://localhost:8887/"

  public recupererRecetteById(idRecette) : Observable<Recette>{
    let url = this.preUrl+ "/recette-api/public/recette/"+ idRecette; //a verifier
>>>>>>> dev_v07.5
    return this.http.get<Recette>(url);
  }

  constructor(private http: HttpClient) { }
}
