import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


export class JwtResponse {
  constructor(
    public jwttoken: string,
     ) {}
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  BASE_PATH = 'http://localhost:8080';
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

  public username: string;
  public password: string;

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  authenticate(username, password) {
    return this.http.post<any>(this.BASE_PATH + '/authenticate', {username, password}, this.httpOptions).pipe(
     map(
       userData => {
        sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        const tokenStr = 'Bearer ' + userData.jwtToken;
        sessionStorage.setItem('token', tokenStr);
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
       }
     )
    );
  }

  createBasicAuthToken(username: string, password: string) {
    return 'Bearer ' + window.btoa(username + ':' + password);
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) {
      return false;
    }
    return true;
  }

  getLoggedInUserName() {
    const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) {
      return '';
    }
    return user;
  }
}
