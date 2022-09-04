import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-testeira-nota-mental',
  templateUrl: './testeira-nota-mental.component.html',
  styleUrls: ['./testeira-nota-mental.component.css']
})
export class TesteiraNotaMentalComponent implements OnInit, AfterViewInit {

  @ViewChild('mobile') sideNav?: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
  }

}
