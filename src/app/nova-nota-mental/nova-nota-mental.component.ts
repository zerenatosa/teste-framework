import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceNotasMentaisService } from '../services/service-notas-mentais.service';
import { ConteudoNota } from '../models/conteudoNota';

@Component({
  selector: 'app-nova-nota-mental',
  templateUrl: './nova-nota-mental.component.html',
  styleUrls: ['./nova-nota-mental.component.css']
})
export class NovaNotaMentalComponent implements OnInit {

@Output() aoTransferir = new EventEmitter<any>();

  nomeDaNota : string = '';
  intervenienteDaNota : string = '';
  escopoDaNota : string = '';
  vencimentoDaNota : string = '';
  descricaoDaNota : string = '';




  constructor(private service: ServiceNotasMentaisService) { }

  ngOnInit(): void {

  }

  gravarNovaNota(){

  }




  transferir(){
    console.log('solicitado transferencia');
    console.log(this.nomeDaNota);
    const conteudoNota : ConteudoNota = {nomeDaNota: this.nomeDaNota,
                          intervenienteDaNota: this.intervenienteDaNota,
                          escopoDaNota: this.escopoDaNota,
                          vencimentoDaNota: this.vencimentoDaNota,
                          descricaoDaNota: this.descricaoDaNota};
    /* this.aoTransferir.emit(conteudoNota); */
    this.service.adicionarNovaNota(conteudoNota).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos;
    }, error => console.error(error));

    /* this.limparCampos(); */
  }

  limparCampos(){
    this.nomeDaNota="";
    this.intervenienteDaNota="";
    this.escopoDaNota="";
    this.vencimentoDaNota="";
    this.descricaoDaNota="";
  }

}
