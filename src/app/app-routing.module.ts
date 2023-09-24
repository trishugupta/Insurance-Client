import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyChartComponent } from './policy-chart/policy-chart.component';
import { PolicyListComponent } from './policy-list/policy-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/policy-list', pathMatch: 'full' },
  { path: 'policy-list', component: PolicyListComponent },
  { path: 'app-policychart', component: PolicyChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
