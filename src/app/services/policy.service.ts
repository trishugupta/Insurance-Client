import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private baseUrl = environment.apiUrl;
  constructor(private _http : HttpClient) { }

  addPolicy(data:any) : Observable<any>{
    return this._http.post(`${this.baseUrl}/Policy/createpolicy`, data);
  }

  editPolicy(policycode: string , data:any) : Observable<any>{
    return this._http.put(`${this.baseUrl}/Policy/editpolicy/${policycode}` , data);
  }

  deletePolicy(policycode: string) : Observable<any>{
    return this._http.delete(`${this.baseUrl}/Policy/deletepolicy/${policycode}`);
  }

  getPolicyList() : Observable<any>{
    return this._http.get(`${this.baseUrl}/Policy/GetPolicies`);
  }

  getPolicyListByMonth(region: string) : Observable<any>{
    const params = { region: region };

    return this._http.get(`${this.baseUrl}/Policy/GetPoliciesByMonth`,{params});
  }
}
