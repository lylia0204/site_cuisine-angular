import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';
import { FavoriteService } from '../services/fav.service'
import { Observable } from "rxjs";
import { FavoriteRecipes } from '../auth/favoriterecipes'
import { Recette } from '../common/data/recette';
import * as html2pdf from 'html2pdf.js'
import * as jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import { AfficherPageService } from '../common/service/afficher-page.service';
import { RechercheService } from '../common/service/recherche.service';
import { RecetteService } from '../common/service/recette.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as AOS from 'aos'
import { AotSummaryResolver } from '@angular/compiler';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  board: string;
  errorMessage: string;
  info: any;
  recettefavorite: FavoriteRecipes[];
  recettes: Recette[] = [];
  recettedelete : Recette

  recipeId: string;
  isReadonly: boolean = true;
  //recupe par ID
  idRecette: string;

  //pagination
  pageActuelle: number = 1;

  messagevide : boolean;
  /////////////// page recette ts /////////////////
  modalRef: BsModalRef;

//pour afficher note de la recette
rate: number = 4
max: number = 5;

//
// isReadonly: boolean = true;
infoUser: any
// recettefavorite: Observable<FavoriteRecipes>;

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



  constructor(private modalService: BsModalService ,public rechercheService : RechercheService,public afficherPageService : AfficherPageService, private _router:Router, private userService: UserService, private token: TokenStorageService, public favoriteService: FavoriteService,  public tokenStorage: TokenStorageService) {
  }

  ngOnInit() {
    
    //get liste favoris
    this.recupererListIdFavoris()



    this.userService.getUserBoard().subscribe(
      data => {
        this.board = data;

      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
       // this._router.navigate(['/'])
      }
    );

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),

    };

   }
  isEmpty(data) {
    for(var key in data) {
        if(data.hasOwnProperty(key))
            return false;
    }
    return true;
}


  recupererListIdFavoris() {
    let username = this.token.getUsername()
    console.log("le user " + username)
    this.favoriteService.getAllFavoriteRecipes(username).subscribe(
      data => {
        this.recettefavorite = data;
        if(this.isEmpty(data)){
         this.messagevide = true
        }else{
          this.recupererRecetteParId(data)
        }
      });


  }

  recupererRecetteParId(recettefavorite: FavoriteRecipes[]) {
    for (let i = 0; i < recettefavorite.length; i++) {
      const element = recettefavorite[i];
      this.afficherPageService.recupererRecetteById(element.recipeId)
        .subscribe(recette => this.recettes.push(recette))
    }
  }

  
   //recuperer ID de recette
   recupererIdRecette(recette){
    this.idRecette =recette._id;
    sessionStorage.setItem("_id", this.idRecette);
    this._router.navigate(['/pageRecette', this.idRecette]);
    
  }





  supprimerRecette(recette){
    let username = this.token.getUsername()
    this.idRecette = recette._id;
    this.favoriteService.deleteFavRecipe(username, this.idRecette).subscribe(
      data=> console.log(data)) 

    this.reloadPage();
     
  
}
  reloadPage(){
    window.location.reload();
  }
  

  //////partie page recette
  
openModalWithClass(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(
    template,
    Object.assign({}, { class: 'gray modal-xl' })
  );
  if (this.isEmpty(this.materiels)) {
    this.vrai = true;

  }
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



/////////test fermeture modal /////////
private closeAllModals() {
  for (let i = 1; i <= this.modalService.getModalsCount(); i++) {
    this.modalService.hide(i);
  }
}
  
}
