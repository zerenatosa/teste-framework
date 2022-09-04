import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nota-mental',
  templateUrl: './sobre-nota-mental.component.html',
  styleUrls: ['./sobre-nota-mental.component.css']
})
export class SobreNotaMentalComponent implements OnInit {

  sobreEMailNotaMental = 'zerenatosa@gmail.com';
  sobreAutorNotaMental = "José Renato Santiago Arantes";
  sobreTwiterNotaMental = "@zerenatosa";
  sobreAnoLancamentoNotaMental = "2022";
  sobreUrlGit = "https://github.com/zerenatosa/controle-de-notas-mentais";

  year: number;
  constructor() {
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
