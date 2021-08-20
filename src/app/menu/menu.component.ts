import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('isLogged')){
      this.isLogged = true;
    }
  }

}
