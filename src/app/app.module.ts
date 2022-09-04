import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandPageComponent } from './land-page/land-page.component';
import { ExibicaoNotaMentalComponent } from './exibicao-nota-mental/exibicao-nota-mental.component';
import { NovaNotaMentalComponent } from './nova-nota-mental/nova-nota-mental.component';
import { SobreNotaMentalComponent } from './sobre-nota-mental/sobre-nota-mental.component';
import { TesteiraNotaMentalComponent } from './testeira-nota-mental/testeira-nota-mental.component';
import { ConteudoDestaVersaoComponent } from './conteudo-desta-versao/conteudo-desta-versao.component';
import { VoltarComponent } from './voltar/voltar.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClient, HttpClientModule } from '@angular/common/http';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    LandPageComponent,
    ExibicaoNotaMentalComponent,
    NovaNotaMentalComponent,
    SobreNotaMentalComponent,
    TesteiraNotaMentalComponent,
    ConteudoDestaVersaoComponent,
    VoltarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
