import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import { Cleaning } from './pages/services/cleaning/cleaning';
import { RootCanal } from './pages/services/root-canal/root-canal';
import { DentalImplant } from './pages/services/dental-implant/dental-implant';
import { Appointment } from './components/appointment/appointment';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'services/cleaning', component: Cleaning },
  { path: 'services/root-canal', component: RootCanal },
  { path: 'services/dental-implant', component: DentalImplant },
  { path: 'contact', component: Contact },
  { path: 'appointment', component: Appointment }, // ✅ new route
  { path: '**', redirectTo: '' }
];


export class AppRoutingModule { }
