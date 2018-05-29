import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPast2Component } from './assign-past2.component';

describe('AssignPast2Component', () => {
  let component: AssignPast2Component;
  let fixture: ComponentFixture<AssignPast2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignPast2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPast2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
