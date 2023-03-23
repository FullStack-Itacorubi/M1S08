import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nome = "";
  menssagem = "Digite o seu nome aqui!!!!!"
  classes = "";

  constructor() { }

  ngOnInit(): void {
    console.log("Estou no ngOnInit ")
  }

  getNome(){
    return this.nome;
  }

  add(){}
}
