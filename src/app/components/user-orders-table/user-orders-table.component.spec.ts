import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrdersTableComponent } from './user-orders-table.component';

describe('UserOrdersTableComponent', () => {
  let component: UserOrdersTableComponent;
  let fixture: ComponentFixture<UserOrdersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOrdersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
