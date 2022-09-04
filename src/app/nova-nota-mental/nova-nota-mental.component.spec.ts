import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaNotaMentalComponent } from './nova-nota-mental.component';

describe('NovaNotaMentalComponent', () => {
  let component: NovaNotaMentalComponent;
  let fixture: ComponentFixture<NovaNotaMentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaNotaMentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaNotaMentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
