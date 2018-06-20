import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpart1Component } from './viewpart1.component';

describe('Viewpart1Component', () => {
  let component: Viewpart1Component;
  let fixture: ComponentFixture<Viewpart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
