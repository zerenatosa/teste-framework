import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConteudoNota } from '../models/conteudoNota';
import { ServiceNotasMentaisService } from '../services/service-notas-mentais.service';
import {HttpClient} from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-notas-concluidas',
  templateUrl: './notas-concluidas.component.html',
  styleUrls: ['./notas-concluidas.component.css']
})
export class NotasConcluidasComponent implements OnInit {

  private url = 'http://localhost:3000/conteudoNotas';
 @Input() conteudoDaNotas: any[] = [];
//declaração das variáveis
/* nomeDaNota: String = '';
intervenienteDaNota : String = '';
escopoDaNota: String = '';
vencimentoDaNota : Date = new Date();

descricaoDaNota: String = '';
dataAux2 : Date = this.vencimentoDaNota;
dataAux = new Date();
diasAberto : number =  (this.dataAux.getDate() - this.vencimentoDaNota.getDate()) */

//evento output
@Output() aoGravarNovaNota = new EventEmitter<any>();


  constructor(private service : ServiceNotasMentaisService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    /* this.conteudoDaNotas = this.service.conteudoNotas; */
    this.service.todas11().subscribe((conteudoDaNotas: ConteudoNota[]) =>{
      console.table(conteudoDaNotas);
      this.conteudoDaNotas = conteudoDaNotas;
    }
    )
  /* this.conteudoDaNotas = this.service.conteudoNotas;
  this.service.todas11();
  this.conteudoDaNotas = this.service.todas11(); */

  }


    deletarNota(userId: string){
      this.httpClient.delete('http://localhost:3000/conteudoNotas/' + userId).subscribe((res:any)=> {
        alert('Registro deletado');
        this.ngOnInit();

      })
      this.ngOnInit();
   }

   concluirNota(userId: string){
    this.httpClient.patch('http://localhost:3000/conteudoNotas/' + userId,{"situacaoNota": "concluida"}).subscribe((res:any)=> {
      alert('nota concluída!');

    })
    this.ngOnInit();
 }


}
