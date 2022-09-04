import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteiraNotaMentalComponent } from './testeira-nota-mental.component';

describe('TesteiraNotaMentalComponent', () => {
  let component: TesteiraNotaMentalComponent;
  let fixture: ComponentFixture<TesteiraNotaMentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteiraNotaMentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteiraNotaMentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
