import { Component } from '@angular/core';
import { PolicyService } from '../services/policy.service';
import { CoreService } from '../Core/core.service';

@Component({
  selector: 'app-policy-chart',
  templateUrl: './policy-chart.component.html',
  styleUrls: ['./policy-chart.component.css']
})
export class PolicyChartComponent {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    barThickness: 40, 
  };

  barChartData: any[] = [];
  barChartLabels: string[] = [];

  Region: string[] = [
    'East',
    'West',
    'North',
    'South'
  ]

  //public selectedRegion: string  = ''; // Default region

  constructor(private _policyservice:PolicyService, private _coreservice : CoreService) {}

  ngOnInit() {
    this.fetchChartData();
  }

  fetchChartData(selectedRegion: string  = '') {
    if (selectedRegion !== null && selectedRegion.trim() === '') {
      selectedRegion = '';
    }
    this._policyservice.getPolicyListByMonth(selectedRegion!)
      .subscribe((res) => {
        if (res.data != null) {
          const data = res.data; 
  
          // Extracting labels (e.g., "2023-9")
          this.barChartLabels = data.map((entry: any) => `${entry.year}-${entry.month}`);
  
          // Extracting policy counts
          const policyCounts = data.map((entry: any) => entry.policyCount);
  
          // Adding the data to the chart dataset
          this.barChartData = [{ data: policyCounts, label: 'Policies Bought', backgroundColor: 'rgba(128, 0, 128, 0.5)'}];
        }
        else{
          console.log(res.message);
          this._coreservice.openSnackBar(res.error);
        }
      });
  }

  onRegionChange(event:any) {
    const selectedRegion = event.value;
    this.fetchChartData(selectedRegion);
  }
}
