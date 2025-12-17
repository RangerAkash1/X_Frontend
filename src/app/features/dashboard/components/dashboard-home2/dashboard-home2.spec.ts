import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHome2 } from './dashboard-home2';

describe('DashboardHome2', () => {
  let component: DashboardHome2;
  let fixture: ComponentFixture<DashboardHome2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardHome2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardHome2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
