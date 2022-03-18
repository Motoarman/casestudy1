import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent{
  contact = new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    lastname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    comment:new FormControl('',[Validators.required])
  })
  onSubmit()
  {
      console.log(this.contact.value),
      alert("Thanks for your response we will contact you soon")
      ;
  }

}
