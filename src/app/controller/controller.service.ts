import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  

  constructor() { }

  getMaterias(): string[] {
    return ['um', 'dois', 'tres'];
  }


}
