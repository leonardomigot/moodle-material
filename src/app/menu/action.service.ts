import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  temp: Subject<any> = new Subject<any>();

  constructor() { }

  buttonClick(){
    this.temp.next('dd');
  }

}
