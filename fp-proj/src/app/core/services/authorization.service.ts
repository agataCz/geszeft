import { Injectable } from '@angular/core';
import { OAuthService, OAuthEvent, UserInfo } from 'angular-oauth2-oidc';
import { BehaviorSubject, Observable } from 'rxjs';
import { authCodeFlowConfig } from '../authCodeFlowConfig';

import { User } from '../../models/User';
import { filter } from 'rxjs/operators';
import { NavigationEnd, NavigationStart, Router, RouterEvent} from '@angular/router';
import { LoadingService } from './loading.service';

@Injectable()

export class AuthorizationService {
  private user = new BehaviorSubject<User>(null);
  user$ = this.user.asObservable();

  loggedIn: boolean;
  constructor(
    private oauthService: OAuthService,
    private loadingService: LoadingService,
    router: Router
  ) {
    loadingService.loading = false;
    router.events
    .pipe(
      filter(
        (event) => event instanceof NavigationStart || event instanceof NavigationEnd
      )
    ).subscribe((event: RouterEvent): void =>
      this.naviStart(event, loadingService)
    );

    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oauthService.hasValidAccessToken()) {
        this.fetchUser();
      }
    });

    this.oauthService.events
      .pipe(
        filter(
          (e) => e.type === 'token_received' || e.type === 'token_refreshed'
        )
      )
      .subscribe(({ type }: OAuthEvent) => {
        this.fetchUser();
      });

    this.oauthService.events
      .pipe(
        filter((e) => e.type === 'logout' || e.type === 'session_terminated')
      )
      .subscribe(({ type }: OAuthEvent) => {
        this.user.next(null);
      });
  }

  private fetchUser(){
    let claims: any = this.oauthService.getIdentityClaims();
    if(claims){
      this.user.next(<User>{ name: claims.nickname });
    }
    else{
      this.user.next(null);
    }
  }

  naviStart(event: RouterEvent, loadingService: LoadingService): void {
    if (event instanceof NavigationStart) {
      loadingService.loading = true;
    } else if (event instanceof NavigationEnd) {
      loadingService.loading = false;
    }
  }

  login() {
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.revokeTokenAndLogout({
      client_id: this.oauthService.clientId,
      returnTo: this.oauthService.redirectUri
    }, true);
  }

  public getUser(): Observable<User> {
    return this.user.asObservable();
  }

  public isTokenValid(): boolean{
    return this.oauthService.hasValidAccessToken();
  }
}
