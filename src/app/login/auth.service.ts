import { Injectable } from '@angular/core';
import { PESSOAS } from '../pessoa/pessoa-list';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // isLogged: boolean = false;  
  userId: number = 0;

  constructor(private router: Router) {
    if (sessionStorage.getItem('isLogged') != undefined){
      let temp = JSON.parse(sessionStorage.getItem('isLogged') || '{}');
      this.userId = temp;
    }
   }

  login(email: string, password: string) {
    let temp = PESSOAS.find(pessoa => pessoa.email === email);
    if (temp == undefined){
      throw new Error("Usuário não existe");
    }
    if (temp.password !== password){
      throw new Error("Senha errada");
    }
    this.userId = temp.id;
    sessionStorage.setItem('isLogged', JSON.stringify(this.userId));
    this.router.navigate([`menu/${temp.id}`]);
  }



  currentId(): number {
    return this.userId;
  }
}
