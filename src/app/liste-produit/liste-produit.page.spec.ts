import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProduitPage } from './liste-produit.page';

describe('ListeProduitPage', () => {
  let component: ListeProduitPage;
  let fixture: ComponentFixture<ListeProduitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeProduitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProduitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
