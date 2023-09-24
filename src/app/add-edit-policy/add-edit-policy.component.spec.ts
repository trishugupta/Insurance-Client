import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPolicyComponent } from './add-edit-policy.component';

describe('AddPolicyComponent', () => {
  let component: AddEditPolicyComponent;
  let fixture: ComponentFixture<AddEditPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditPolicyComponent]
    });
    fixture = TestBed.createComponent(AddEditPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
