import { Component, Input, OnInit } from '@angular/core';
import { PaisModel } from '../paisModel';
import { PaisService } from '../pais.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pais-detail',
  templateUrl: './pais-detail.component.html',
  styleUrls: ['./pais-detail.component.css']
})
export class PaisDetailComponent implements OnInit {
  paisId!:string;
  @Input() paisDetail!:PaisModel;
  constructor( private route: ActivatedRoute,private paisService:PaisService) { 
  }

  ngOnInit() {
    
    }
  }


