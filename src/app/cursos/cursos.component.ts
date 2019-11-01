import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';
import { CursosModule } from './cursos.module';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos:string[];

  constructor(private CursosService:CursosService) { 
    this.nomePortal=this.CursosService.getNomeInstituiçao();
    this.cursos=this.CursosService.getCursos();
  }
    
  ngOnInit() {
  }

}
