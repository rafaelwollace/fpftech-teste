import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './componentes/includes/header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ClientesModule } from './componentes/clientes/clientes.module';
import { ProdutosModule } from './componentes/produtos/produtos.module';
import { VendasModule } from './componentes/vendas/vendas.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ClientesModule,
    ProdutosModule,
    VendasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
