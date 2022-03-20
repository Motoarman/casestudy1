
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Istudent  } from './istudent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  students!: Istudent[];
  

  constructor(private httpClient: HttpClient) { }

  submitUser(user:any){
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
}
