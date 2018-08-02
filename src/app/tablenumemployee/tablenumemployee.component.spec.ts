import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablenumemployeeComponent } from './tablenumemployee.component';

describe('TablenumemployeeComponent', () => {
  let component: TablenumemployeeComponent;
  let fixture: ComponentFixture<TablenumemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablenumemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablenumemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
