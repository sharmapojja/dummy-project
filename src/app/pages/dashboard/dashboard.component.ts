import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  rightbar:any;
  btn:any;
  logout(){
    this.rightbar = document.getElementById("rightbar");
    this.btn = document.getElementById("logoutBtn");
    if(this.rightbar.style.display == "none"){
      this.rightbar.style.display = "block";
      this.btn.style.display = "none";
    }else{
      this.rightbar.style.display = "none";
    }
  }
}
