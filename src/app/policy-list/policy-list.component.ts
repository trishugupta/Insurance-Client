
import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditPolicyComponent } from '../add-edit-policy/add-edit-policy.component';
import { PolicyService } from '../services/policy.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { DeletepolicyComponent } from '../deletepolicy/deletepolicy.component';
import { Router } from '@angular/router';
import { CoreService } from '../Core/core.service';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {


  displayedColumns: string[] = [ 'policyCode',
  'purchaseDate',
  'fuel',
  'vehicleSegment',
  'premium',
  'bodily_injury_liability',
  'personal_injury_protection',
  'property_damage_liability',
  'collision',
  'comprehensive',
  'action'];
  dataSource! :  MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _dialog : MatDialog, private _policyService : PolicyService, private _coreservice: CoreService){}

   ngOnInit(): void {
     this.getPolicyList();
   }
  
   openaddpolicyform(){
    const dialogref = this._dialog.open(AddEditPolicyComponent, {data: {editMode: false}});
    dialogref.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getPolicyList();
        }
      }
    })
    }


    
    openEditpolicyform(data:any){
      const dialogref =this._dialog.open(AddEditPolicyComponent, {
        data: { editMode: true, ...data },
      });
      dialogref.afterClosed().subscribe({
        next: (val) => {
          if(val){
            this.getPolicyList();
          }
        }
      })
      
      }

      openDeletepolicyform(policyCode:string){
        const dialogref = this._dialog.open(DeletepolicyComponent, {
          width: '350px',
          height: '200px',
          data: {policyCode}
        });
        dialogref.afterClosed().subscribe({
          next: (val) => {
            if(val){
              this.getPolicyList();
            }
          }
        })
      }


    applyFilter(event : Event){
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();

     if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
     }
    }

    getPolicyList(){
      this._policyService.getPolicyList().subscribe({
        next: (res) => {
         this.dataSource = new MatTableDataSource(res.data);
         this.dataSource.sort = this.sort;
         this.dataSource.paginator = this.paginator;
        },
        error : (err) => {
          console.log(err.error);
          this._coreservice.openSnackBar(err.error);
        }
      })
    }
  
}
