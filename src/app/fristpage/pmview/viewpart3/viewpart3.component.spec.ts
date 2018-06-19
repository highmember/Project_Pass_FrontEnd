import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpart3Component } from './viewpart3.component';

describe('Viewpart3Component', () => {
  let component: Viewpart3Component;
  let fixture: ComponentFixture<Viewpart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
