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
    this.nomePortal='Unip';
    //var servico=new CursosService();
    
    this.cursos=this.CursosService.getCursos();
    
  }
    
  ngOnInit() {
  }

}
