import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { data } from 'jquery';
import { DoctorServiceService } from 'src/app/doctor-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent{

  
  constructor(private doctorServiceService: DoctorServiceService){

  }
   
  onSubmit(data:any){

     this.doctorServiceService.addEnquiry(data).subscribe(result =>{
    });
    
<<<<<<< HEAD
    alert("Thanks for your response we will contact you soon")
    ;
=======
  })
 
  onSubmit(data:any)
  {
    

    //  this.doctorServiceService.submitUser(book).subscribe(data =>{
        
     // });

      this.doctorServiceService.addEnquiry(data).subscribe(result =>{
      });
      
      alert("Thanks for your response we will contact you soon")
      ;
>>>>>>> c59403c653a818f0c00501e3e0c732dfcc661d5b
  }

}