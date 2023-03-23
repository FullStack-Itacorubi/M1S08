import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {
  //O @Input serve para receber dados do componente pai para o filho 
  @Input() titulo: string = ""; 
  @Input() tipo: string = "";
  @Input() mensagem: string = "Digite algo no campo acima";

  constructor() { }

  ngOnInit(): void {
  }

}
