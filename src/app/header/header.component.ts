import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

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
 constructor(private tokenStorage: TokenStorageService) { }

 isCollapsed = true;

  ngOnInit(): void {

    window.addEventListener("scroll",function(){
      let menuArea = document.getElementById('mainNav');
      if(window.pageYOffset > 0){
          menuArea.classList.add("navbar-shrink");
      }else{
          menuArea.classList.remove("navbar-shrink");
      }
  })
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

 

}
