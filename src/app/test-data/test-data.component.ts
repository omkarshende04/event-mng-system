import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.css']
})
export class TestDataComponent implements OnInit {

  tests!:Test[];

  constructor( private testService: TestService) { }

  ngOnInit(): void {

      
      this.getTest();
  }


  getTest(){
    this.testService.getTestList().subscribe(data =>{
      this.tests = data;
    })
  }

}
