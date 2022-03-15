import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PatientSectionComponent } from './patient-section/patient-section.component';
import { DoctorSectionComponent } from './doctor-section/doctor-section.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';


var routelist : Routes =[
  {path:"home",component:HomeComponent},
  {path:"patient-section",component:PatientSectionComponent},
  {path:"doctor-section",component:DoctorSectionComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"contact-us",component:ContactUsComponent}
  
]


@NgModule({
  declarations: [
    AppComponent,
    PatientSectionComponent,
    DoctorSectionComponent,
    AboutUsComponent,
    ContactUsComponent,
   
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routelist)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
