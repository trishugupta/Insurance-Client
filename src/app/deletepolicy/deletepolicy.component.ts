import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PolicyService } from '../services/policy.service';
import { CoreService } from '../Core/core.service';

@Component({
  selector: 'app-deletepolicy',
  templateUrl: './deletepolicy.component.html',
  styleUrls: ['./deletepolicy.component.css']
})
export class DeletepolicyComponent {
 constructor(  public dialogRef: MatDialogRef<DeletepolicyComponent>, private _policyService: PolicyService ,
   @Inject(MAT_DIALOG_DATA) public data:any, private _coreservice: CoreService){}

 ConfirmDelete(){
  this._policyService.deletePolicy(this.data.policyCode).subscribe({
    next : (val : any) => {
      if(val.data){
      this._coreservice.openSnackBar('Policy Deleted Successfully', 'done');
      this.dialogRef.close(true);
      }
    },
    error : (err:any) => {
      console.log(err.error);
      this._coreservice.openSnackBar(err.error);
    }
  })
 }
}
