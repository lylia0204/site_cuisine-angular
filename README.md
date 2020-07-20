<img src="https://lylemi-projet-al04.s3.eu-west-3.amazonaws.com/image-logo/le-logo-noir.png">

Le projet Lyl'Emi Sugar and Salt est une application qui permet de trouver des recettes de cuisine.
Cette application est un regroupement de recettes venant de différents sites de recettes de cuisine.
Pour le moment il s'agit des sites *marmiton.org* et *750g.com*.
Ce projet a été construit avec une architecture back-end en **Spring Boot** et front-end **Angular 9**.
Les recettes scrapées en **NodeJS v12** et sont stockées dans une base de données non relationnnelle **MongoDB**.
Une autre base de données **MySQL** est utilisée pour stocker des données liées à l'utilisation du site, telles que l'enregistrement de compte utilisateur ou encore les ID des recettes favorites.

Ce projet est divisé en 4 repositories GitHub:  
https://github.com/lylia0204/site_cuisine_micro-services = microservice utilisateur : enregistrement utilisateurs et ajout aux favoris
https://github.com/lylia0204/site_cuisine_micro-services-recherche  = microservice recherche de recettes
https://github.com/lylia0204/site_cuisine-angular = partie Angular  
https://github.com/lylia0204/site_cuisine_scraper = partie alimentation de la base de donnée MongoDB (scrapping des sites).

Les technologies utilisées pour le deployement sont:   
AWS EC2 pour le deployement des microservices  
AWS RDS pour l'hebergement de la base de données MySql.  
AWS ElasticBeans pour la partie nodeJS.  
AWS S3 pour la partie Angular.

---------------------------------------------------------------------------------------------------------------------------------------
#site_cuisine-angular

Environnement de developpement:

Angular CLI 9.1.7

Il faut  donc avoir un angular installé.

```sh
$ git https://github.com/lylia0204/site_cuisine-angular.git
$ cd site_cuisine-angular
$ npm install
```

Exécutez ng serve. Accédez à http:// localhost:4200 /. L'application se rechargera automatiquement si vous modifiez l'un des fichiers source.

Voir la documentation d'Angular CLI https://angular.io/cli pour toute autre commande.
