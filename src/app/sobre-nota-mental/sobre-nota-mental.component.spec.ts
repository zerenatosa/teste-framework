import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreNotaMentalComponent } from './sobre-nota-mental.component';

describe('SobreNotaMentalComponent', () => {
  let component: SobreNotaMentalComponent;
  let fixture: ComponentFixture<SobreNotaMentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreNotaMentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreNotaMentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
