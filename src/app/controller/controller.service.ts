import { Injectable } from '@angular/core';
import { PESSOA_MATERIA_SEMESTRE } from '../pessoa-materia/pessoa-materia-semestre';
import { AuthService } from '../login/auth.service';
import { MATERIAS } from '../materia/materia-list';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  userId: number;  

  constructor(
    private authService: AuthService
  ) { 
    this.userId = authService.currentId();
    // sessionStorage
    
  }

  getMat2() {

    let temp = PESSOA_MATERIA_SEMESTRE.filter( item => item.idPessoa === this.userId );
    
    let temp2 = temp.filter( item => item.idSemestre === 1 );

    let temp3: number[] = [];

    temp2.forEach(item => {
      temp3.push(item.idMateria)      
    });

    let temp4: string[] = [];

    for(let i=0; i < temp3.length; i++){
      temp4.push(MATERIAS[i].subName)
    }   
    
    return temp4;
    
    };
        
  




}
