import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FristTimeProjectComponent } from './frist-time-project.component';

describe('FristTimeProjectComponent', () => {
  let component: FristTimeProjectComponent;
  let fixture: ComponentFixture<FristTimeProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FristTimeProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FristTimeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
