import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventData } from '../event-data';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  eventDetails : EventData[]=[];

  displayColumns: string[] = ['position', 'name', 'weight', 'symbol', 'Edit', 'Delete'];

  constructor( private userService : UserService,
    private router : Router) { }

  ngOnInit(): void {
    this.getAllEvents();
  }

  public getAllEvents(){
    this.userService.getAllEvents().subscribe(
      (resp:EventData[])=>{
        console.log(resp);
        this.eventDetails = resp;
      },(error:HttpErrorResponse) =>
      {
        console.log(error);
      }
    )
  }

  deleteEvent(eventId:any){
    this.userService.deleteEvent(eventId).subscribe(
       (resp:any)=>{
        this.getAllEvents();
       },(error:HttpErrorResponse)=>
       {
        console.log(error);
       }
    )
  }

  updateEvent(){
    this.router.navigate(['/eventRegistrationForm'])
  }

}
