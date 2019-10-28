import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortdetailsPage } from './portdetails.page';

describe('PortdetailsPage', () => {
  let component: PortdetailsPage;
  let fixture: ComponentFixture<PortdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortdetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
