import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConteudoDestaVersaoComponent } from './conteudo-desta-versao/conteudo-desta-versao.component';
import { ExibicaoNotaMentalComponent } from './exibicao-nota-mental/exibicao-nota-mental.component';
import { LandPageComponent } from './land-page/land-page.component';
import { NovaNotaMentalComponent } from './nova-nota-mental/nova-nota-mental.component';
import { SobreNotaMentalComponent } from './sobre-nota-mental/sobre-nota-mental.component';
import { TesteiraNotaMentalComponent } from './testeira-nota-mental/testeira-nota-mental.component';

const routes: Routes = [
  {path:'', redirectTo: 'land-page', pathMatch:'full'},
  {path: 'testeira-nota-mental', component: TesteiraNotaMentalComponent},
  {path: 'exibicao-nota-mental', component: ExibicaoNotaMentalComponent},
  {path: 'sobre-nota-mental', component: SobreNotaMentalComponent},
  {path: 'nova-nota-mental', component: NovaNotaMentalComponent},
  {path: 'land-page', component: LandPageComponent},
  {path: 'conteudo-desta-versao', component: ConteudoDestaVersaoComponent},
  ];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
