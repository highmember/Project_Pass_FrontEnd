import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPast4Component } from './assign-past4.component';

describe('AssignPast4Component', () => {
  let component: AssignPast4Component;
  let fixture: ComponentFixture<AssignPast4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignPast4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPast4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
