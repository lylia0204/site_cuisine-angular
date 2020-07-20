import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs";
import { AfficherPageService } from '../common/service/afficher-page.service';
import { Recette } from '../common/data/recette';
import * as html2pdf from 'html2pdf.js'
import * as jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';
import { FavoriteRecipes } from '../auth/favoriterecipes'
import { FavoriteService } from '../services/fav.service'
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';



@Component({
  selector: 'app-page-recette',
  templateUrl: './page-recette.component.html',
  styleUrls: ['./page-recette.component.scss']
})
export class PageRecetteComponent implements OnInit {

  recette: Recette
  rate: number
  max: number = 5;
  isReadonly: boolean = true;
  infoUser: any
  recettefavorite: Observable<FavoriteRecipes>;
  preparations: string
  materiels: string
  vrai: boolean;
  message = false
  pasconnecter = true
  id = sessionStorage.getItem("_id");
  alerts: any[] =[{
    type: 'success',
    msg: `Well done! You successfully read this important alert message. (added: ${new Date().toLocaleTimeString()})`,
    timeout: 5000
  }];
  constructor(public afficherPageService: AfficherPageService, public favoriteService: FavoriteService, public tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.recupererRecette(this.id);

  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  recupererRecette(id) {
    this.afficherPageService.recupererRecetteById(id).subscribe(
      data => {
        this.recette = data;
        this.materiels = this.recette.materiels;

        if (this.isEmpty(this.materiels)) {
          this.vrai = true;
          // console.log("materiel : "+ this.materiels)
        }

        this.rate = parseInt(this.recette.note);
      })
  }

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

  ajoutrecettefavorite() {
      let username = this.tokenStorage.getUsername()
      let token = this.tokenStorage.getToken
      let recipeId =this.recette._id
      if(token){
        this.favoriteService.addFavoriteRecipesUser(username, recipeId)
        .subscribe(
          recettefav => {this.recettefavorite= recettefav
          
          },
          
          error => { console.log(error) 
                      this.router.navigate(['/login'])}
         
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


reloadPage(){
  window.location.reload();
}



}





