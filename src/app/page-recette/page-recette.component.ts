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
  // ingredients = this.recette.ingredients
  // materiel = this.recette.materiels
  // etape = this.recette.etapesPreparation

  constructor(public afficherPageService: AfficherPageService) { }

  id = sessionStorage.getItem("_id");

  ngOnInit(): void {
    this.recupererRecette(this.id);
    console.log(this.id)
  }
  recupererRecette(id) {
    this.afficherPageService.recupererRecetteById(id).subscribe(
        data => { this.recette = data;}
    )
  }
}




