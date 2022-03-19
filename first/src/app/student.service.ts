import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Istudent  } from './istudent';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  
  students!: Istudent[];

  constructor(private httpClient: HttpClient) { }
  getStudents(){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json');
    return this.httpClient.get("http://localhost:3000/student",{headers:httpHeaders});
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
