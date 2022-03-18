import { Component, OnInit,Inject } from '@angular/core';
import { StudentService } from '../student.service';
import { Istudent } from '../istudent';
import { Observable } from 'rxjs';


@Inject(StudentService)
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  students! : Istudent[];
  constructor(private studentservice:StudentService) { }

  ngOnInit(): void {
    this.studentservice.getAllStudents().subscribe((data:Istudent[]) => {
      this.students = data;
    });
  }

}
