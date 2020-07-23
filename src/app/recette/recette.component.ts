import { Component, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';
import { RecetteService } from '../common/service/recette.service';
import { RechercheService } from '../common/service/recherche.service';
import { AfficherPageService } from '../common/service/afficher-page.service';
import { Recette } from '../common/data/recette';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as AOS from 'aos'
import { AotSummaryResolver } from '@angular/compiler';
import { Observable } from "rxjs";
import * as html2pdf from 'html2pdf.js'
import * as jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import { TokenStorageService } from '../auth/token-storage.service';
import { FavoriteRecipes } from '../auth/favoriterecipes'
import { FavoriteService } from '../services/fav.service'
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';



@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})

export class RecetteComponent implements OnInit {
  
  
  
  modalRef: BsModalRef;
 
  
  
  constructor(public rechercheService : RechercheService, public recetteService : RecetteService, public afficherPageService : AfficherPageService, private _router:Router, private modalService: BsModalService , public favoriteService: FavoriteService, public tokenStorage: TokenStorageService) {}
  
  recettes: Recette[] 
  recette: Recette 
  idRecette: string;
  
  //pagination
  pageActuelle: number = 1;


  /////////////// page recette ts /////////////////


//pour afficher note de la recette
rate: number = 4
max: number = 5;

//
isReadonly: boolean = true;
infoUser: any
recettefavorite: Observable<FavoriteRecipes>;

//corriger les les erreur du scraping
preparations: string
materiels: string
vrai: boolean;

//
message = false
pasconnecter = false

//gestion Alert
alerts: any[] = [{
  type: 'success',
  msg: `Well done! You successfully read this important alert message. (added: ${new Date().toLocaleTimeString()})`,
  timeout: 5000
}];

//retour recherche vide
messageListeVide: boolean;
  
//atribut de recherche par ingredients
ingredient1 : string = ""
ingredient2 : string = ""
ingredient3 : string =""
 
//atribut de recherche avec/sans ingredient
nom : string = "" 
avecIngredient : string = ""
sansIngredient : string =""
 
  ngOnInit(): void {

    //Animation sur les portfolio
    AOS.init();

    //recuperer toutes les recettes
    this.recetteService.recupererRecette()
    .subscribe(
      recette => {this.recettes = recette,
      this.randomize(this.recettes)},
      error => { console.log(error)}
    )

    
  }

  //recuperer ID de recette
  recupererIdRecette(recette){
    this.idRecette =recette._id;
    sessionStorage.setItem("_id", this.idRecette);
    this._router.navigate(['/pageRecette', this.idRecette]);
    
  }

  //melanger les donnee d'un tableau
  randomize(tab) {
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    return tab;
}
  


openModalWithClass(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(
    template,
    Object.assign({}, { class: 'gray modal-xl' })
  );
  if (this.isEmpty(this.materiels)) {
    this.vrai = true;

  }
}


//verifier si une liste est vide
isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

//telecharger la recette en pdf
telecharger() {
  const options = {
    name: 'output.pdf',
    image: { type: 'jpeg' },
    html2canvas: {},
    jsPDF: { orientation: 'landscape' }
  }
  const element: Element = document.getElementById('recette-pdf')

  html2pdf()
    .from(element)
    .set(options)
    .save()
}

telecharger2() {
  var element = document.getElementById('recette-pdf')
  html2canvas(element).then((canvas) => {
    console.log(canvas)

    var imgData = canvas.toDataURL('image/png')
    var doc = new jspdf()

    var imgHeight = canvas.height * 208 / canvas.width;

    doc.addImage(imgData, 0, 0, 208, imgHeight)
    doc.save("image.pdf")
  })
}


//methode ajout aux favoris
ajoutrecettefavorite(recipeId) {
    let username = this.tokenStorage.getUsername()
    let token = this.tokenStorage.getToken
    //let recipeId =recette._id
    if(token){
      this.favoriteService.addFavoriteRecipesUser(username, recipeId)
      .subscribe(
        recettefav => {this.recettefavorite= recettefav
        
        },
        
        error => { console.log(error) 
          this.closeAllModals();
                    this._router.navigate(['/login']) 
                    }
       
      )
      this.pasconnecter = true,
    console.log("-----------------"+ username)
      console.log("Username "+ recipeId)
    
      } 
}
add(): void {
this.alerts.push({
  type: 'info',
  timeout: 5000
});
}


onClosed(dismissedAlert: AlertComponent): void {
  this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
}


reloadPage() {
  window.location.reload();
}


/////////test fermeture modal /////////
private closeAllModals() {
  for (let i = 1; i <= this.modalService.getModalsCount(); i++) {
    this.modalService.hide(i);
  }
}

 //////recherche par ingredient
 
 rechercherParIngredients() {

   console.log(" in1 ==== "+this.ingredient1 +" in2 ==== "+this.ingredient2 +" in3 ==== "+this.ingredient3 )

  this.rechercheService.rechercherParIngredient(this.ingredient1, this.ingredient2, this.ingredient3).subscribe(
      data => { this.recettes = data;
        //console.log("le resultat recherche par ingredient ========= "+ JSON.stringify(data));
         if(this.isEmpty(this.recettes)){
        console.log("liste viiiide ")
        this.messageListeVide = true;
      }else{
        return this.recettes
      }
      console.log("liste de recette "+JSON.stringify(this.recettes))
      })
}
 //////recherche par ingredient
 
 rechercherAvecSansIngredients() {

   console.log(" in1 ==== "+this.nom +" in2 ==== "+this.avecIngredient +" in3 ==== "+this.sansIngredient )

  this.rechercheService.rechercherAvecSansIngredient(this.nom, this.avecIngredient, this.sansIngredient).subscribe(
      data => { this.recettes = data;
        //console.log("le resultat recherche par ingredient ========= "+ JSON.stringify(data));
         if(this.isEmpty(this.recettes)){
        console.log("liste viiiide ")
        this.messageListeVide = true;
      }else{
        return this.recettes
      }
      console.log("liste de recette "+JSON.stringify(this.recettes))
      })
}


}

 
  



