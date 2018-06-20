import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpart4Component } from './viewpart4.component';

describe('Viewpart4Component', () => {
  let component: Viewpart4Component;
  let fixture: ComponentFixture<Viewpart4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpart4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
