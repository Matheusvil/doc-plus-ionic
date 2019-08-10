import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosPage } from './resultados.page';

describe('ResultadosPage', () => {
  let component: ResultadosPage;
  let fixture: ComponentFixture<ResultadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
