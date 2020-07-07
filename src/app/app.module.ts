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
import { PageRecetteComponent } from './page-recette/page-recette.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';

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
    AperitifComponent,
    PageRecetteComponent,
    LoginComponent ,
    UserComponent,
    RegisterComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,
    FormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
