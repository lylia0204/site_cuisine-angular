import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicComponent } from './basic/basic.component';
import { FormsModule } from '@angular/forms';
import { EntreeComponent } from './entree/entree.component';
import { RecetteComponent } from './recette/recette.component'; 
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { PlatComponent } from './plat/plat.component';
import { BoissonComponent } from './boisson/boisson.component';
import { DessertComponent } from './dessert/dessert.component';
import { AperitifComponent } from './aperitif/aperitif.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    EntreeComponent,
    RecetteComponent,
    AccueilComponent,
    PlatComponent,
    BoissonComponent,
    DessertComponent,
    AperitifComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
