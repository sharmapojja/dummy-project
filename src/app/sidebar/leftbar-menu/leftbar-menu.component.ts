import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftbar-menu',
  templateUrl: './leftbar-menu.component.html',
  styleUrls: ['./leftbar-menu.component.css']
})
export class LeftbarMenuComponent implements OnInit, AfterViewInit{
  leftbar:any;
  span:any;
  nav:any;
  ngAfterViewInit(){
    this.leftbar = document.getElementById("leftbar");
    this.span = document.getElementsByClassName("menu_list");
    this.nav = document.getElementsByClassName("nav-link");
  }
  ngOnInit(): void {
    
  }
  

  sidebar(){
    if(this.leftbar.style.width == "75px"){
      this.leftbar.style.width = "180px";
      for(let item of this.span){
        item.style.display = "inline";
      }
    }else{
      this.leftbar.style.width = "75px";
      
    }
    if(this.leftbar.style.width == "75px"){
      for(let item of this.span){
        item.style.display = "none";
      }
      for(let item of this.nav){
        item.style.margin = "0 0 0 0.5rem"
        // console.log(item);
      }
    }
    

  }
}
