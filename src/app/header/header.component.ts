import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { RecetteService } from '../common/service/recette.service';
import { Router, NavigationEnd } from '@angular/router';
import { RechercheService } from '../common/service/recherche.service';

// declare const myNavBar :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  roles: string[];
  authority: string;
  info : any;

  nomRecherche: string;

  //activer le bouton responsive
  isCollapsed = true;

 constructor(private tokenStorage: TokenStorageService,public recetteService : RecetteService,
   private _router:Router, public rechercheService : RechercheService) {

  // override the route reuse strategy
  this._router.routeReuseStrategy.shouldReuseRoute = function(){
    return false;
 }
 this._router.events.subscribe((evt) => {
    if (evt instanceof NavigationEnd) {
       // trick the Router into believing it's last link wasn't previously loaded
       this._router.navigated = false;
       // if you need to scroll back to top, here is the right place
       window.scrollTo(0, 0);
    }
});



  }


  ngOnInit(): void {
    
    //animation du header au moment du scroll
    window.addEventListener("scroll",function(){
      let menuArea = document.getElementById('mainNav');
      if(window.pageYOffset > 0){
          menuArea.classList.add("navbar-shrink");
      }else{
          menuArea.classList.remove("navbar-shrink");
      }
  })
  
  // pour la connection et la deconnection du user
  if (this.tokenStorage.getToken()) {
    this.roles = this.tokenStorage.getAuthorities();
    this.roles.every(role => {
      if (role === 'ROLE_ADMIN') {
        this.authority = 'admin';
        return false;
      }
      this.authority = 'user';
      return true;
    });
  }
  
  this.info = {
    username: this.tokenStorage.getUsername(),
  };
  }
  logout() {
    this.tokenStorage.signOut();
   this._router.navigate(["/acceuil"])
    window.location.reload()   
  }

 
  //recuperer les recettes par categorie a partir du header
  recupererRecetteParCategorie(categorie:string){
    sessionStorage.setItem("categorie", categorie);
    this._router.navigate(['/recetteCategorie', categorie]);
  }

  //rechercher les recettes par nom a partir du header
  rechercherParNom(){
    sessionStorage.setItem("nom", this.nomRecherche);
    console.log("=====nom de recherche === "+ this.nomRecherche)
    this._router.navigate(['/recetteRecherche', this.nomRecherche]);
  }




}
