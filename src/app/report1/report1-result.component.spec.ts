import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report1ResultComponent } from './report1-result.component';

describe('Report1ResultComponent', () => {
  let component: Report1ResultComponent;
  let fixture: ComponentFixture<Report1ResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report1ResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report1ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
