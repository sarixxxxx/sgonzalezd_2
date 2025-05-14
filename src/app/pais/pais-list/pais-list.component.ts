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
  paisMayor:string="";
  anioMayor:number=2025;
  selected:boolean=false;
  selectedPais!:PaisModel;
  constructor(private paisService:PaisService) { }

  ngOnInit() {
    this.getPaises();
    this.getPaisMayor();
  }

  getPaises():void{
    this.paisService.getPaises().subscribe({next: apiData=>this.paises=apiData});
  }

  getPaisMayor():void{
    this.paisMayor="Portugal";
    this.anioMayor=1143;
  }
  onSelected(pais: PaisModel){
    this.selected=true;
    this.selectedPais=pais;
  }

}
