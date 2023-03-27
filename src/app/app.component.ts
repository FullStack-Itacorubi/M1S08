import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from './services/calculadora.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  //Primeiro componente a ser inicializado - normalmente não vem com o implements OnInit
  jsonObj:any = {
    nome:"Exemplo",
    idade:22,
    regiao:"Pernambuco"
  }

  num1:number = 10;
  num2:number = 10;

  //Exemplo de injeção de dependencia para importar o serviço de calculadora
  constructor(private calcService: CalculadoraService){} 

  getSoma(){
    return this.calcService.soma(this.num1, this.num2);
  }

  getSubtracao(){
    return this.calcService.subtracao(this.num1, this.num2);
  }

  getDivisao(){
    return this.calcService.divisao(this.num1, this.num2);
  }

  getMultiplicacao(){
    return this.calcService.multiplicacao(this.num1, this.num2);
  }
}
