import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatString' //Nome de identificação de um pipe
})
export class ConcatStringPipe implements PipeTransform {

  transform(value: any, args: string) { //método responsável por receber o valor e os argumentos
    console.log(value); // string passada antes do caractere pipe ({{ 'Isso aqui cai no value' | concatString }})
    console.log(args);// dados passados depois do caractere ':' ({{ '' | concatString:'isso aqui cai no args'}})
    return value + args;
  }

}
