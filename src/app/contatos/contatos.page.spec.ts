import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosPage } from './contatos.page';

describe('ContatosPage', () => {
  let component: ContatosPage;
  let fixture: ComponentFixture<ContatosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
