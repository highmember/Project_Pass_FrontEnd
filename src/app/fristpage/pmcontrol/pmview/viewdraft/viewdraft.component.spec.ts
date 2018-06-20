import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdraftComponent } from './viewdraft.component';

describe('ViewdraftComponent', () => {
  let component: ViewdraftComponent;
  let fixture: ComponentFixture<ViewdraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
