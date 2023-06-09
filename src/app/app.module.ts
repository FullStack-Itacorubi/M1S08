import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { ButtonBoxComponent } from './components/button-box/button-box.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';
import { ConcatStringPipe } from './pipes/concat-string.pipe';


@NgModule({
  declarations: [ //Importação somente de componentes, pipes e diretivas
    AppComponent,
    FormularioComponent,
    InputBoxComponent,
    ButtonBoxComponent,
    SelectBoxComponent,
    ConcatStringPipe
  ],
  imports: [ //Importação somente de módulos
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
