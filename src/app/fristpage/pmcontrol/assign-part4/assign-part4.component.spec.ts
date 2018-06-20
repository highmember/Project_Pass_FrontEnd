import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPart4Component } from './assign-part4.component';

describe('AssignPast4Component', () => {
  let component: AssignPart4Component;
  let fixture: ComponentFixture<AssignPart4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignPart4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
