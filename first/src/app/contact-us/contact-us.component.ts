import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { data } from 'jquery';
import { DoctorServiceService } from 'src/app/doctor-service.service';
import { UserDetails } from '../user-details';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent{

  
  constructor(private doctorServiceService: DoctorServiceService){

  }
   
    contact = new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    lastname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    comment:new FormControl('',[Validators.required])
  })
  onSubmit()
  {
    let bodycomp:UserDetails = {
      firstname:this.contact.get("firstname")?.value,
      lastname:this.contact.get("lastname")?.value,
      email_id:this.contact.get("email")?.value,
      p_Comment:this.contact.get("comment")?.value,
    }
     // console.log(bodycomp.firstname);
      this.doctorServiceService.submitUser(bodycomp).subscribe(data =>{
        
      });
      
      alert("Thanks for your response we will contact you soon")
      ;
  }

}
