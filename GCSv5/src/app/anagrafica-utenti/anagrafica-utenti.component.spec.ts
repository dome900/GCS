import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagraficaUtentiComponent } from './anagrafica-utenti.component';

describe('AnagraficaUtentiComponent', () => {
  let component: AnagraficaUtentiComponent;
  let fixture: ComponentFixture<AnagraficaUtentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnagraficaUtentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagraficaUtentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
