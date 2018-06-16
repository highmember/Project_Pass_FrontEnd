import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPart1Component } from './assign-part1.component';

describe('AssignPart1Component', () => {
  let component: AssignPart1Component;
  let fixture: ComponentFixture<AssignPart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignPart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
