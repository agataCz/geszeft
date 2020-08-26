import { Component } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';
import { LoadingService } from './loading.service'

@Component({
  selector: 'geszeft-root',
  templateUrl: './geszeft.component.html',
  styleUrls: ['./geszeft.component.scss']
})
export class GeszeftComponent {
  title = 'fp-proj';

  constructor(
    private loadingService: LoadingService,
    router: Router
    ) {
    loadingService.loading = false;
    router.events.subscribe(
      (event: RouterEvent): void => this.naviStart(event, loadingService)
    );
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
