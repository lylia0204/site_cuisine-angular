import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://ec2-15-188-82-154.eu-west-3.compute.amazonaws.com:8886/api/test/user';
  private adminUrl = 'http://ec2-15-188-82-154.eu-west-3.compute.amazonaws.com:8886/api/test/admin';
  
  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
}
