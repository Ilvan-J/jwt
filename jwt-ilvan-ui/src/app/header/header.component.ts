import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(
    private userAuthSerive: UserAuthService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  public getUserService(): UserService {
    return this.userService;
  }

  public isLoggedIn() {
    return this.userAuthSerive.isLoggeIn();
  }

  public logout(): void {
    this.userAuthSerive.clear();
    this.router.navigate(['/home']);
  }

}
