import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  constructor() { }
  getCursos(){
    return ['Ciencia da computação','Analise de sistema','Banco de Dados','Fisica']
  }
}
