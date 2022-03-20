import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { data } from 'jquery';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent{

  
  constructor(private studentService : StudentService){

  }
   
    contact = new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    lastname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    comment:new FormControl('',[Validators.required])
  })
  onSubmit()
  {
    const bodycomp={
      firstname:this.contact.value.firstname,
      lastname:this.contact.value.lastname,
      email_id:this.contact.value.email,
      Comment:this.contact.value.comment,
    }

      this.studentService.submitUser(bodycomp).subscribe(data =>{
         console.log(data);
      });
      
      alert("Thanks for your response we will contact you soon")
      ;
  }

}
