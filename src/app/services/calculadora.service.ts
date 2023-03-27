import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  //Service criado em aula para entender o uso das injeções de dependências
  constructor() { }

  soma(num1: number, num2:number){
    return num1 + num2;
  }

  multiplicacao(num1: number, num2:number){
    return num1 * num2;
  }

  divisao(num1: number, num2:number){
    return num1/num2;
  }

  subtracao(num1: number, num2:number){
    return num1-num2;
  }

}
