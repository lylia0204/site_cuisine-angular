import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RecetteComponent } from './recette/recette.component'; 
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { PageRecetteComponent } from './page-recette/page-recette.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { RatingModule } from 'ngx-bootstrap/rating';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecetteCategorieComponent } from './recette-categorie/recette-categorie.component';
import { RecetteRechercheComponent } from './recette-recherche/recette-recherche.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { AlertModule } from 'ngx-bootstrap/alert';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecetteComponent,
    AccueilComponent,
    PageRecetteComponent,
    LoginComponent ,
    UserComponent,
    RegisterComponent,
    AdminComponent,
    HomeComponent,
    RecetteCategorieComponent,
    RecetteRechercheComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,
    RatingModule.forRoot(),
    FormsModule,
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    NgxPaginationModule,
    BrowserAnimationsModule,
    AlertModule
    
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
