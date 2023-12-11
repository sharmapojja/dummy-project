import { Component } from '@angular/core';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.css']
})
export class RightbarComponent {
  rightbar:any;
  btn: any;
  logout(){
    this.rightbar = document.getElementById("rightbar");
    this.btn= document.getElementById("logoutBtn");
    // console.log(this.btn);
    if(this.rightbar.style.display == "none"){
      this.rightbar.style.display = "block";
    }else{
      this.rightbar.style.display = "none";
      this.btn.style.display = "block";
    }
  }
}
