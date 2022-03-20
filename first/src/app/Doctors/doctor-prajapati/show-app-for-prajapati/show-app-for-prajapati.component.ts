import { Component, OnInit } from '@angular/core';
import { DoctorServiceService } from 'src/app/doctor-service.service';
import { Istudent } from 'src/app/istudent';
@Component({
  selector: 'app-show-app-for-prajapati',
  templateUrl: './show-app-for-prajapati.component.html',
  styleUrls: ['./show-app-for-prajapati.component.css']
})
export class ShowAppForPrajapatiComponent implements OnInit {
  students! : Istudent[];

  constructor(public doctorServiceService :DoctorServiceService) { }
  ngOnInit(): void {

    this.doctorServiceService.getAllStudents().subscribe(data=>{
      this.students = data;
  })

}
}
