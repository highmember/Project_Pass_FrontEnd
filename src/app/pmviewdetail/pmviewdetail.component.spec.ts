import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmviewdetailComponent } from './pmviewdetail.component';

describe('PmviewdetailComponent', () => {
  let component: PmviewdetailComponent;
  let fixture: ComponentFixture<PmviewdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmviewdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmviewdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
