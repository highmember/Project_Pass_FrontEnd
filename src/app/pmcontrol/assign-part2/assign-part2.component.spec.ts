import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPart2Component } from './assign-part2.component';

describe('AssignPart2Component', () => {
  let component: AssignPart2Component;
  let fixture: ComponentFixture<AssignPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
