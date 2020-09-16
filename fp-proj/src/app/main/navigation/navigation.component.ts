import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../core/services/authorization.service'
import { User } from '../../models/User'

@Component({
  selector: 'geszeft-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  user: User;
  constructor(
    public authorizationService: AuthorizationService
  ) {
  }

  ngOnInit(): void {
      this.authorizationService.getUser().subscribe(u=>{
      this.user = u;
    })
  }

  login(){
    this.authorizationService.login();

  }

  logout(){
    this.authorizationService.logout();
  }
}
