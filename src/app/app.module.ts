import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MycardviewComponent } from './componentes/comunes/mycardview/mycardview.component';
import { MylistviewComponent } from './componentes/comunes/mylistview/mylistview.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ContenidoComponent,
    FooterComponent,
    MycardviewComponent,
    MylistviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
