import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasConcluidasComponent } from './notas-concluidas.component';

describe('NotasConcluidasComponent', () => {
  let component: NotasConcluidasComponent;
  let fixture: ComponentFixture<NotasConcluidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasConcluidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasConcluidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
