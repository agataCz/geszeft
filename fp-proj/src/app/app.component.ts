import { Component } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';
import { LoadingService } from './core/services/loading.service'
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks'
import { authCodeFlowConfig } from './core/authCodeFlowConfig'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fp-proj';

  constructor(
    private loadingService: LoadingService,
    private oauthService: OAuthService,
    router: Router
    ) {
    loadingService.loading = false;
    router.events.subscribe(
      (event: RouterEvent): void => this.naviStart(event, loadingService)
    );

    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  naviStart(event: RouterEvent, loadingService: LoadingService): void{

    if (event instanceof NavigationStart) {
      loadingService.loading = true;
    }
      else if (event instanceof NavigationEnd) {
        loadingService.loading = false;
      }
    }
}
