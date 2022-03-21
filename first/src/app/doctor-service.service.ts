
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Istudent  } from './istudent';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';
import { UserDetails } from './user-details';


@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {
  appointment! :Appointment[];
  students!: Istudent[];
  userDetails!: UserDetails[];
  user!:UserDetails[];

  constructor(private httpClient: HttpClient) { }

  submitUser(user:UserDetails){
   return this.httpClient.post("http://localhost:3000/user",user,
   {
    
    headers:{
      "Access-Control-Allow-Origin":"*"
    }
 
   })
   
  }

getAllStudents():Observable<Istudent[]>{
  return this.httpClient.get<Istudent[]>("http://localhost:3000/student",
  {

   headers:{
     "Access-Control-Allow-Origin":"*"
   }

  });

}

appointments():Observable<Appointment[]>{
  return this.httpClient.get<Appointment[]>("http://localhost:3000/appointments",
  {

   headers:{
     "Access-Control-Allow-Origin":"*"
   }

  });
}
}
