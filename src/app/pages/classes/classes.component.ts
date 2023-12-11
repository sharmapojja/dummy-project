import { Component } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  all_data: any;
  userData: any;


  constructor(private dummyService: TestService) { }

  ngOnInit() {

    this.dummyService.getData().subscribe((data)=>{
      // console.log(data);
      this.all_data = data;
      console.log(this.all_data.dashboardData);
      this.userData = this.all_data.dashboardData.userData;
      // }
    })  
  }
}
