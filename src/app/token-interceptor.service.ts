import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private injector: Injector) {
  }

  excludedUrl() {
	const excludedUrl = [
		'/api/auth/login',
		];
	return excludedUrl
  }

  intercept(req, next) {
  	let token = '';
	if ( this.excludedUrl().some(x => x === req.url)) {
	  	let nonTokenizedReq = req.clone()
		return next.handle(nonTokenizedReq)
	} else {
		token = this.injector.get(AuthService).getToken()
	  	let tokenizedReq = req.clone({
	  		setHeaders : {
	  			Authorization : 'Bearer '+token
	  		}
	  	})
	  	return next.handle(tokenizedReq)
	}
  }
}
