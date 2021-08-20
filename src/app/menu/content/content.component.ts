import { Component, OnInit } from '@angular/core';
import { ControllerService } from 'src/app/controller/controller.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  materias: string[] = [];

  constructor(
    private controllerService: ControllerService
  ) { }

  ngOnInit(): void {
    this.materias = (this.controllerService.getMat2());
  }



}
