import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PolicyService } from '../services/policy.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../Core/core.service';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-edit-policy.component.html',
  styleUrls: ['./add-edit-policy.component.css']
})
export class AddEditPolicyComponent implements OnInit{
 policyForm:FormGroup;
Vehiclegroup: string[] = [
  'Group A',
  'Group B',
  'Group C'
]

constructor(private _fb : FormBuilder, private _policyService: PolicyService, private _coreservice: CoreService,
   private _dialogref: MatDialogRef<AddEditPolicyComponent>,
   @Inject(MAT_DIALOG_DATA) public data:any){
 this.policyForm = this._fb.group({
  policyCode: '',
  purchaseDate: [{value:'', disabled: data.editMode}],
  fuel:'',
  vehicleSegment: ['',Validators.required],
  premium: [0.00, [Validators.required, Validators.max(1000000)]],
  bodily_injury_liability: 0.00,
  personal_injury_protection: 0.00,
  property_damage_liability: 0.00,
  collision: 0.00,
  comprehensive: 0.00,

 });

 if(this.data.editMode){
    this.policyForm.get('policyCode')?.clearValidators();        
} else {                
  this.policyForm.get('policyCode')?.addValidators(Validators.required);               
}
}

ngOnInit(): void {
  if(this.data.editMode){
  this.policyForm.patchValue(this.data);
  }
}

OnFormSubmit(){
 if(this.policyForm.valid){
  if(this.data.editMode){
    this._policyService.editPolicy(this.data.policyCode,this.policyForm.value).subscribe({
      next : (val : any) => {
        if(val.data != null){
        this._coreservice.openSnackBar('Policy Updated Successfully', 'done');
        this._dialogref.close(true);
        }
      },
      error : (err:any) => {
        console.log(err.error);
        this._coreservice.openSnackBar(err.error);
      }
    })
  }
  else{
  this._policyService.addPolicy(this.policyForm.value).subscribe({
    next : (val : any) => {
      if(val.data != null){
        this._coreservice.openSnackBar('Policy Added Successfully', 'done');
      this._dialogref.close(true);
      }
    },
    error : (err:any) => {
      console.log(err.error);
      this._coreservice.openSnackBar(err.error);
    }
  })
 }
}
}
}
