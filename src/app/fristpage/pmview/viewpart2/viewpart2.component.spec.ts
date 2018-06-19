import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpart2Component } from './viewpart2.component';

describe('Viewpart2Component', () => {
  let component: Viewpart2Component;
  let fixture: ComponentFixture<Viewpart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
