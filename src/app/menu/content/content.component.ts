import { Component, OnInit } from '@angular/core';
import { ControllerService } from 'src/app/controller/controller.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  materias: string[] = [];
  subIds: string[] = [];

  //passar ids

  constructor(
    private controllerService: ControllerService
  ) { }

  ngOnInit(): void {
    [this.materias, this.subIds] = this.controllerService.getMat2();
  }



}
