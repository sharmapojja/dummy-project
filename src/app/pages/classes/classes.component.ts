import { Component } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  data!: any[];


  constructor(private dummyService: TestService) { }

  ngOnInit() {

    this.dummyService.getData().subscribe((data)=>{
      console.log(data);
    })  
  }
}
