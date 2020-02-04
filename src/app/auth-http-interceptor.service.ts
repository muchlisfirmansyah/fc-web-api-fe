import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (this.authenticationService.isUserLoggedIn() && req.url.indexOf('basicauth') === -1) {
          const authReq = req.clone({
              headers: new HttpHeaders({
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${window.btoa(this.authenticationService.username + ':' + this.authenticationService.password)}`
              })
          });
          return next.handle(authReq);
      } else {
          return next.handle(req);
      }
  }
}
