import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleviewprogressComponent } from './saleviewprogress.component';

describe('SaleviewprogressComponent', () => {
  let component: SaleviewprogressComponent;
  let fixture: ComponentFixture<SaleviewprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleviewprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleviewprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
