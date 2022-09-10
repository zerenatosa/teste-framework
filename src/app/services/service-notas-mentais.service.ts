import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ConteudoNota } from '../models/conteudoNota';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceNotasMentaisService {

 private listaConteudoNota: any[] ;
 private url = 'http://localhost:3000/conteudoNotas';


  constructor(private httpClient: HttpClient) {
    this.listaConteudoNota = [];
   }


   get conteudoNotas(){
    return this.listaConteudoNota;
   }

   todas(): Observable<ConteudoNota[]>  {


    return this.httpClient.get<ConteudoNota[]>(this.url + '?situacaoNota=em ser');


   }

   todas11(): Observable<ConteudoNota[]>{
    return this.httpClient.get<ConteudoNota[]>('http://localhost:3000/conteudoNotas?situacaoNota=concluida')
   }


   adicionarNovaNota(conteudoNota:ConteudoNota): Observable<ConteudoNota>{
    /* this.listaConteudoNota.push(conteudoNota); */

   return this.httpClient.post<ConteudoNota>(this.url,conteudoNota);


   }


   deletarNota(userId: string){
      this.httpClient.delete(this.url + userId).subscribe((res:any)=> {
        alert('deletei');
      })
   }

}
