import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'button-box',
  templateUrl: './button-box.component.html',
  styleUrls: ['./button-box.component.css']
})
export class ButtonBoxComponent implements OnInit {
  //O @Output serve para receber funções do componente filho para o pai
  @Output() clicou: EventEmitter<any> = new EventEmitter();
  //EventEmitter é a classe responsável pela emição de uma função

  @Input() titulo: string = "";
  
  constructor() { }

  ngOnInit(): void {}

}
