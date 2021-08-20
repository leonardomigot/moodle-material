import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../controller/controller.service';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {

  object: any;

  constructor(
    private controllerService: ControllerService
  ) {
      this.object = controllerService.getMat2();
    }

  ngOnInit(): void {
  }





}
