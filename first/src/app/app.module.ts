import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


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


var routelist: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'dentistry', component: DentistryComponent },
  { path: 'cardiology', component: CardiologyComponent },
  { path: 'orthopaedics', component: OrthopaedicsComponent },
  { path: 'neurology', component: NeurologyComponent },
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
    
  ],
  imports: [BrowserModule, RouterModule.forRoot(routelist),FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
