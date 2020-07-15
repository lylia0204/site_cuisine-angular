import { Component, OnInit, Input } from '@angular/core';
import { AfficherPageService } from '../common/service/afficher-page.service';
import { Recette } from '../common/data/recette';
import * as html2pdf from 'html2pdf.js'
import * as jspdf from 'jspdf'
import html2canvas from 'html2canvas'



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
  
  id = sessionStorage.getItem("_id");
  
  constructor(public afficherPageService: AfficherPageService) { }

  ngOnInit(): void {
    this.recupererRecette(this.id);
  }
  
  recupererRecette(id) {
    this.afficherPageService.recupererRecetteById(id).subscribe(
        data => { this.recette = data;
        this.rate =parseInt(this.recette.note);
      })
  }

  telecharger(){
    const options = {
      name:'output.pdf',
      image: {type:'jpeg'},
      html2canvas: {},
      jsPDF: {orientation: 'landscape'}
    }
    const element:Element = document.getElementById('recette-pdf')

    html2pdf()
      .from(element)
      .set(options)
      .save()
  }

  telecharger2 (){
    var element=document.getElementById('recette-pdf')
    html2canvas(element).then((canvas) => {
      console.log(canvas)

      var imgData = canvas.toDataURL('image/png')
      var doc = new jspdf()

      var imgHeight = canvas.height * 208 / canvas.width;

      doc.addImage(imgData, 0, 0, 208, imgHeight)
      doc.save("image.pdf")
    })
  }
 
}




