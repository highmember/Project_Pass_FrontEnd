import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPast3Component } from './assign-past3.component';

describe('AssignPast3Component', () => {
  let component: AssignPast3Component;
  let fixture: ComponentFixture<AssignPast3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignPast3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPast3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
