import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Istudent  } from './istudent';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  students!: Istudent[];

  constructor(private httpClient: HttpClient) { }


getAllStudents():Observable<Istudent[]>{
  return this.httpClient.get<Istudent[]>("http://localhost:3000/student",
  {

   headers:{
     "Access-Control-Allow-Origin":"*"
   }

  });
}

}
