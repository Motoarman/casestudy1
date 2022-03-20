import { Component,Inject ,OnInit } from '@angular/core';
import { Istudent } from '../istudent';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-showstudent',
  templateUrl: './showstudent.component.html',
  styleUrls: ['./showstudent.component.css']
})
export class ShowstudentComponent implements OnInit {
  students! : Istudent[];
  constructor(public studentService : StudentService) { }
  
  ngOnInit(): void {

    this.studentService.getAllStudents().subscribe(data=>{
      this.students = data;
    });
  }

}
