import { Component, OnInit } from '@angular/core';

// declare const myNavBar :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 
  constructor() { }



  ngOnInit(): void {

    window.addEventListener("scroll",function(){
      let menuArea = document.getElementById('mainNav');
      if(window.pageYOffset > 0){
          menuArea.classList.add("navbar-shrink");
      }else{
          menuArea.classList.remove("navbar-shrink");
      }
  })

  

  }

}
