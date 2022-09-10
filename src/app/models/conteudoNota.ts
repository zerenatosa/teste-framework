
export interface ConteudoNota {
  id? : number;
  nomeDaNota: string;
  intervenienteDaNota: string;
  escopoDaNota: string;
  vencimentoDaNota?: string;
  descricaoDaNota: string;
  situacaoNota:string;
  dataConclusao:string;
  diasAberto:number;
}
