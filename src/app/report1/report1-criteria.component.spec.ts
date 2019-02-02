import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report1CriteriaComponent } from './report1-criteria.component';

describe('Report1CriteriaComponent', () => {
  let component: Report1CriteriaComponent;
  let fixture: ComponentFixture<Report1CriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report1CriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report1CriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
