import { Component, Input, OnInit } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { AuthStoreProvider } from '../../signal-stores/auth-store';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-result',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './login-result.component.html',
  styleUrl: './login-result.component.less',
})

export class LoginResultComponent {
  authProvider: AuthStoreProvider;
  data: DataService;

  message$: Observable<string>


  constructor(private router: Router, private authStoreProvider: AuthStoreProvider, private dataService: DataService, private route: ActivatedRoute) {
    this.authProvider = authStoreProvider;
    this.data = dataService;
    this.message$ = this.dataService.getMessage();
    this.route.queryParams.subscribe(params => {
      this.processJwt(params['jwt']);
      this.router.navigateByUrl('/login-result');
    });
  }

  processJwt(jwt: string) {
    if (jwt == null || jwt == '')
      return;

    let responsePayload = this.decodeJwtResponse(jwt);

    this.authProvider.store.update({ 
        name: responsePayload.name, 
        sub: responsePayload.sub, 
        given_name: responsePayload.given_name, 
        family_name: responsePayload.family_name, 
        email: responsePayload.email,
        picture: responsePayload.website 
      }
    );

    this.authProvider.saveToken(jwt);
  }

  decodeJwtResponse(token: string) {
    let base64Url = token.split('.')[1]
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }
  

}
