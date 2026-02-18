import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Appointment } from '../appointment/appointment';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule,Appointment],  // 👈 ADD THIS
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  isAppointmentOpen = false;


  openAppointment() {
    this.isAppointmentOpen = true;
    this.closeMenu(); // optional: close mobile menu when opening modal
  }

  closeAppointment() {
    this.isAppointmentOpen = false;
  }
}


