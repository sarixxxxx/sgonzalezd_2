import { Component, OnInit } from '@angular/core';
import { PaisModel } from '../paisModel';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css'],
  standalone:false
})
export class PaisListComponent implements OnInit {
  paises:Array<PaisModel>=[];
  constructor(private paisService:PaisService) { }

  ngOnInit() {
  }

  getPaises():void{
    this.paisService.getPaises().subscribe({next: apiData=>this.paises=apiData});
  }

}
