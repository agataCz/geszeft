import { Injectable } from '@angular/core';
import { OAuthService, UserInfo, OAuthEvent, EventType } from 'angular-oauth2-oidc';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import {User} from '../../models/User'

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {

  private user = new BehaviorSubject<User>(null);
  user$ = this.user.asObservable();

  loggedIn: boolean
  constructor( private oauthService: OAuthService,
    private httpClient: HttpClient) {
      this.oauthService.events.subscribe(({ type }: OAuthEvent) => {
              this.FetchUser(type)
      }
    );
  }

  private FetchUser(type: EventType){
    switch (type) {
      case 'token_received':
        {
          // var claims = this.oauthService.getIdentityClaims();
          // this.user.next(<User> {name: claims.nickname})

           this.oauthService.loadUserProfile().then(u => {
             this.user.next(<User> {name: u.nickname})})
          break;


        }
      case 'logout':
        {
          this.user.next(null)
          break;
        }
      }
}

  Login()
  {
   this.oauthService.initImplicitFlow();
  }

  Logout()
  {
    this.oauthService.logOut();
  }

  public getUser() : Observable<User>{
    return this.user.asObservable();
  }
}

