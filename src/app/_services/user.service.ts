import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplyForEvent } from '../apply-for-event';
import { EventData } from '../event-data';
import { RegisterUser } from '../register-user';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  PATH_OF_API = 'http://localhost:8080';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  public login(loginData) {
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }

  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
      responseType: 'text',
    });
  }

  public roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }

  public registerEvent(eventData:EventData):Observable<object>{
    return this.httpclient.post(this.PATH_OF_API+"/registerEvent",eventData);
  }

  public applyForEvent(applyForEvent:ApplyForEvent):Observable<object>{
    return this.httpclient.post(this.PATH_OF_API+"/applyForEvent",applyForEvent);
  }

  public registerUser(registerUser:RegisterUser):Observable<object>{
    return this.httpclient.post(this.PATH_OF_API+"/rergisterNewUser", registerUser, {headers:this.requestHeader})
  }

  public getAllEvents(){
    return this.httpclient.get<EventData[]>(this.PATH_OF_API+"/getallevents")
  }

  public deleteEvent(eventId:string){
    return this.httpclient.delete(this.PATH_OF_API+"/deleteEventDetails"+eventId)
  }

  public getAllEntries():Observable<ApplyForEvent[]>{
    return this.httpclient.get<ApplyForEvent[]>(this.PATH_OF_API+"/getparticipents");
  }

  public getAllData():Observable<EventData[]>{
    return this.httpclient.get<EventData[]>(this.PATH_OF_API+"/carddata");
  }
}
