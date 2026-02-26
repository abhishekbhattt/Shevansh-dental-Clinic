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

  if (!name?.trim() || !age || !address?.trim() || !date || !time) {
    this.errorMessage = "Please fill the first 5 details.";
    this.showError = true;

    setTimeout(() => {
      this.showError = false;
    }, 5000);

    return;
  }

  const message = `
📌 *Appointment Booking Request*

👤 Full Name: ${name}
📄 Age: ${age}
🏢 Address: ${address}
📆 Preferred Date: ${date}
⏰ Preferred Time: ${time}
🩺 Concern: ${problem ? problem : "Not Mentioned"}

──────────────────────────────
🏥 *Shivansh Dental Clinic*
📍 Dehradun, Uttarakhand
📧 info@shivanshdental.com
📞 +91-9027844665
──────────────────────────────

⚠️ *Confidentiality Notice*: This message contains information intended only for Shivansh Dental Clinic. Any unauthorized review, use, disclosure, or distribution is prohibited.  
© Shivansh Dental Clinic
`;

  const phoneNumber = "9027844665"; // clinic WhatsApp number

  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  this.isSuccess = true;

  setTimeout(() => {
    window.location.href = whatsappURL;
  }, 4000);
}


}
