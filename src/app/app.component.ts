import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  isDefaultRoute: boolean = true;
  constructor(private router: Router){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isDefaultRoute = event.url === '/' || event.url === '/policy-list';
      }
    });
  }
  ngOnInit() {
    this.isDefaultRoute = this.router.url === '/' || this.router.url === '/policy-list';
  }
  openpolicychart(){
    this.router.navigate(['/app-policychart']);
  }
  openpolicylist(){
    this.router.navigate(['/policy-list']);
  }
  
}
