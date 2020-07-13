import { Component, OnInit, Input } from '@angular/core';
import { AfficherPageService } from '../common/service/afficher-page.service';
import { Recette } from '../common/data/recette';


@Component({
  selector: 'app-page-recette',
  templateUrl: './page-recette.component.html',
  styleUrls: ['./page-recette.component.scss']
})
export class PageRecetteComponent implements OnInit {

  recette: Recette 
  
  rate: number 
 
  

  constructor(public afficherPageService: AfficherPageService) { }

  id = sessionStorage.getItem("_id");

  ngOnInit(): void {
    this.recupererRecette(this.id);
    this.rate =parseInt(this.recette.note);
    console.log(this.id)
   
  }
  max: number = 5;
  isReadonly: boolean = true;
  
  recupererRecette(id) {
    this.afficherPageService.recupererRecetteById(id).subscribe(
        data => { this.recette = data;}
    )
  }
 
}




