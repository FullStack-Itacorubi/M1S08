import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';


@NgModule({
  declarations: [ //importa somente componentes e diretivas
    AppComponent,
    FormularioComponent
  ],
  imports: [ //Importa somente de módulos
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
