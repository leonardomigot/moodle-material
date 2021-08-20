import { Injectable } from '@angular/core';
import { PESSOAS } from '../pessoa/pessoa-list';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;  
  userId: number = 0;

  constructor(private router: Router) { }

  login(email: string, password: string) {
    let temp = PESSOAS.find(pessoa => pessoa.email === email);
    if (temp == undefined){
      throw new Error("Usuário não existe");
    }
    if (temp.password !== password){
      throw new Error("Senha errada");
    }
    this.isLogged = true;
    this.userId = temp.id;
    sessionStorage.setItem('isLogged', 'true');
    this.router.navigate([`menu/${temp.id}`]);
  }

  validation(): boolean {
    return this.isLogged;
  }

  currentId(): number {
    return this.userId;
  }
}
