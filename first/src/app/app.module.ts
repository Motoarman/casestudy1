import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
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
import { StudentService } from './student.service';


var routelist: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'dentistry', component: DentistryComponent },
  { path: 'cardiology', component: CardiologyComponent },
  { path: 'orthopaedics', component: OrthopaedicsComponent },
  { path: 'neurology', component: NeurologyComponent },
  { path: 'oncology', component:OncologyComponent},
  {path:'accommodation', component:AccommodationComponent},
  {path:'available-gov-schemes', component:AvailableGovSchemesComponent},
  {path:'canteen-service', component:CanteenServiceComponent},
  {path:'emergency-casaulty', component:EmergencyCasualtyComponent},
  {path:'doctor-login', component:DoctorLoginComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    DentistryComponent,
    CardiologyComponent,
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

  ],
  imports: [BrowserModule, RouterModule.forRoot(routelist),FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
