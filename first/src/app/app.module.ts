import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { DentistryComponent } from './dentistry/dentistry.component';
import { CardiologyComponent } from './cardiology/cardiology.component';
import { OrthopaedicsComponent } from './orthopaedics/orthopaedics.component';
import { NeurologyComponent } from './neurology/neurology.component';



var routelist : Routes =[
  {path:"home",component:HomeComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"dentistry",component:DentistryComponent},
  {path:"cardiology",component:CardiologyComponent},
  {path:"orthopaedics",component:OrthopaedicsComponent},
  {path:"neurology",component:NeurologyComponent},
  
  
  
]


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    DentistryComponent,
    CardiologyComponent,
    OrthopaedicsComponent,
    NeurologyComponent
   
   
   
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routelist),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
