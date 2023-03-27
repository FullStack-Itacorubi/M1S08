import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  nome = 'Seu nome Aqui';
  mensagem = 'Exemplo de mensagem passada por variável pelo @Input.';

  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
    //Aqui será o primeiro método a ser iniciado assim que o componente é carregado
    //Ele é um método obrigatório para quando tiver a declaração implements OnInit (linha 08)
    console.log("Estou no ngOnInit ");
  }

  //Método a ser passado para o componente button-box e usado no @Output()
  enviar(event: any) {
    console.log(event);
    this.generalService.enviarCadastro(); //Exemplo de uso de um método disponível em um service
    console.log('Enviou');
  }

  //Método a ser passado para o componente button-box e usado no @Output()
  resetar() {
    console.log('Resetou');
  }
}
