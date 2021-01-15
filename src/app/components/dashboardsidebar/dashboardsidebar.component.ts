import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboardsidebar',
  templateUrl: './dashboardsidebar.component.html',
  styleUrls: ['./dashboardsidebar.component.css']
})
export class DashboardsidebarComponent implements OnInit {
  
  
  links:any=document.getElementsByClassName("link");
  
  constructor() {
   }

  ngOnInit() {
  }

toggleactivelink(k){
  
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
       this.links[k].className += " active";
    
  }
}


