import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged = true;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // this.isLogged = this.authService.validation();

  }

}
