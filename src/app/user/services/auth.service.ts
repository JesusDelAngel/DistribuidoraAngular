import { Injectable } from '@angular/core';
import { LoginForm } from '../../interfaces/LoginForm';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.base_url;

  // private cookie: CookieService
  constructor(private http: HttpClient) {
  }


  // : Observable<void>
  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    };

    return this.http.post(`${this.URL}/auth/login`, body)
      // .pipe(
      //   tap((responseOk: any) => {
      //     const { tokenSession, data } = responseOk;
      //     this.cookie.set('token', tokenSession, 4, '/');
      //   }));

  }

}

