import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicListPage } from './clinic-list.page';

describe('ClinicListPage', () => {
  let component: ClinicListPage;
  let fixture: ComponentFixture<ClinicListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
