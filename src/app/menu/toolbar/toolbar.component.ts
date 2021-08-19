import { Component, OnInit } from '@angular/core';
import { ActionService } from '../action.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private actionService: ActionService
  ) { }

  ngOnInit(): void {
  }

  buttonClick() {
    this.actionService.buttonClick();
  }

}
