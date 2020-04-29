import {Injectable} from '@angular/core';
import * as Constants from '../app-constants';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {CookieService} from 'ngx-cookie-service';
import {LoginComponent} from '../../login/login.component';
import {DialogService} from 'primeng/api';

@Injectable()
export class AuthService {

  private endpoint = 'auth';
  private port = '8011';
  private URL = `${Constants.APP_URI}:${this.port}/${this.endpoint}`;

  constructor(private http: HttpClient,
              private cookieService: CookieService) {}

  login(loginPayload) {
    const headers = {
      'Authorization': 'Basic ' + btoa('devglan-client:devglan-secret'),
      'Content-type': 'application/x-www-form-urlencoded'
    }
    return this.http.post('http://localhost:8080/' + 'oauth/token', loginPayload, {headers});
  }

  loginMock(user: User): boolean {
    if (user.username === 'teste' && user.password === 'teste') {
      this.cookieService.set('loginOK', 'true');
      return true;
    } else {
      this.cookieService.set('loginOK', 'false');
      return false;
    }
  }

}
