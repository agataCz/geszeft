import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthorizationService } from '../core/services/authorization.service';

@Directive({
  selector: '[geszeftRole]',
})

export class RoleDirective{

  isVisible: boolean

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authorizationService: AuthorizationService
  ) {

  }

  ngOnInit() {
    this.isVisible = false;
    this.authorizationService.getUser().subscribe(
      u => {
        if (u && !this.isVisible) {
          this.viewContainer.createEmbeddedView(this.templateRef);
          this.isVisible = true;
        } else {
          this.viewContainer.clear();
          this.isVisible = false;
        }
      }
    )
  }
}
