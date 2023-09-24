import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyChartComponent } from './policy-chart.component';

describe('PolicyChartComponent', () => {
  let component: PolicyChartComponent;
  let fixture: ComponentFixture<PolicyChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyChartComponent]
    });
    fixture = TestBed.createComponent(PolicyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
