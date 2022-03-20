import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { DentistryComponent } from './dentistry/dentistry.component';
import { CardiologyComponent } from './cardiology/cardiology.component';
import { OrthopaedicsComponent } from './orthopaedics/orthopaedics.component';
import { NeurologyComponent } from './neurology/neurology.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OncologyComponent } from './oncology/oncology.component';
import { EmergencyCasualtyComponent } from './patient-section/emergency-casualty/emergency-casualty.component';
import { AccommodationComponent } from './patient-section/accommodation/accommodation.component';
import { CanteenServiceComponent } from './patient-section/canteen-service/canteen-service.component';
import { AvailableGovSchemesComponent } from './patient-section/available-gov-schemes/available-gov-schemes.component';
import { DoctorLoginComponent } from './doctor-section/doctor-login/doctor-login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShowstudentComponent } from './showstudent/showstudent.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';




var routelist: Routes = [
   
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'dentistry', component: DentistryComponent },
  { path: 'cardiology', component: CardiologyComponent },
  { path: 'oncology', component:OncologyComponent},
  { path: 'orthopaedics', component: OrthopaedicsComponent },
  { path: 'neurology', component: NeurologyComponent },
  {path:'accommodation', component:AccommodationComponent},
  {path:'available-gov-schemes', component:AvailableGovSchemesComponent},
  {path:'canteen-service', component:CanteenServiceComponent},
  {path:'emergency-casaulty', component:EmergencyCasualtyComponent},
  {path:'doctor-login', component:DoctorLoginComponent},
  {path:'homepage', component:HomepageComponent},
  {path:'showstudent',component:ShowstudentComponent}




];

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    DentistryComponent,
    OrthopaedicsComponent,
    NeurologyComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    OncologyComponent,
    EmergencyCasualtyComponent,
    AccommodationComponent,
    CanteenServiceComponent,
    AvailableGovSchemesComponent,
    DoctorLoginComponent,
    HomepageComponent,
    ShowstudentComponent,
    CardiologyComponent,
    BookAppointmentComponent
 
   
  

  ],
  imports: [BrowserModule, RouterModule.forRoot(routelist),FormsModule,ReactiveFormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
