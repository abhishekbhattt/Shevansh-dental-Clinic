import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointment.html',
})export class Appointment {

  @Output() close = new EventEmitter<void>();

  constructor(private router: Router) {}

  isSuccess = false;
  showError = false; // 👈 for custom alert
  errorMessage = '';

  appointmentData = {
    name: '',
    age: '',
    address: '',
    date: '',
    time: '',
    problem: ''
  };

  closeModal() {
    this.close.emit();
  }
  

submitForm() {

  const { name, age, address, date, time, problem } = this.appointmentData;

  if (
    !name?.trim() ||
    !age ||
    !address?.trim() ||
    !date ||
    !time
  ) {
    this.errorMessage = "Please fill the first 5 details.";
    this.showError = true;

    setTimeout(() => {
      this.showError = false;
    }, 5000);

    return;
  }

  const message = `
New Appointment Booking

Name: ${name}
Age: ${age}
Address: ${address}
Date: ${date}
Time: ${time}
Problem: ${problem ? problem : "Not Mentioned"}
`;

  const phoneNumber = "919876543210"; // 🔴 replace with real number

  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Show success screen
  this.isSuccess = true;

  // Wait 4 seconds then redirect
  setTimeout(() => {
    window.location.href = whatsappURL;
  }, 4000);
}

}
