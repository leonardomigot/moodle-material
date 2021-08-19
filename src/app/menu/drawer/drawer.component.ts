import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ActionService } from '../action.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  @ViewChild('drawer')drawer: any;

  constructor(
    private actionService: ActionService
  ) { 
    actionService.temp.subscribe(value => {
      this.drawer.toggle()
    })
  }

  ngOnInit(): void {
  }


}
