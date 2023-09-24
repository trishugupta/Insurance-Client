import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepolicyComponent } from './deletepolicy.component';

describe('DeletepolicyComponent', () => {
  let component: DeletepolicyComponent;
  let fixture: ComponentFixture<DeletepolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletepolicyComponent]
    });
    fixture = TestBed.createComponent(DeletepolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
