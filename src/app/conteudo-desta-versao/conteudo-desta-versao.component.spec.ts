import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoDestaVersaoComponent } from './conteudo-desta-versao.component';

describe('ConteudoDestaVersaoComponent', () => {
  let component: ConteudoDestaVersaoComponent;
  let fixture: ComponentFixture<ConteudoDestaVersaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoDestaVersaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoDestaVersaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
