import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPart3Component } from './assign-part3.component';

describe('AssignPart3Component', () => {
  let component: AssignPart3Component;
  let fixture: ComponentFixture<AssignPart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignPart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
