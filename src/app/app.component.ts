import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import * as M from 'materialize-css';
import { ServiceNotasMentaisService } from './services/service-notas-mentais.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('mobile') sidNave?: ElementRef;
  endereco  = '';
  nomeDaNota: any ='';
  conteudoNotas: any[] = [];

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sidNave?.nativeElement);
  }
  title = 'notas-mentais-zero-copia';

  constructor(private service: ServiceNotasMentaisService ){

  }


/* transferir($event: any){ */
/*   const conteudoDaNota = $event;
  this.conteudoNotas.push(conteudoDaNota); */
  /* const dataVencimento= {...$event} */
 /*  this.service.adicionarNovaNota($event); */

/* } */



}
