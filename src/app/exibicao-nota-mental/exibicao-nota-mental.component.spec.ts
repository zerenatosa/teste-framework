import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibicaoNotaMentalComponent } from './exibicao-nota-mental.component';

describe('ExibicaoNotaMentalComponent', () => {
  let component: ExibicaoNotaMentalComponent;
  let fixture: ComponentFixture<ExibicaoNotaMentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibicaoNotaMentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibicaoNotaMentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
