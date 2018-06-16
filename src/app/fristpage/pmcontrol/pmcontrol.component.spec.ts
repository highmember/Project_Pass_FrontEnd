import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmcontrolComponent } from './pmcontrol.component';

describe('PmcontrolComponent', () => {
  let component: PmcontrolComponent;
  let fixture: ComponentFixture<PmcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
