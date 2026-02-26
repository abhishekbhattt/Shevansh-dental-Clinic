import { Component, NgZone } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  constructor(private ngZone: NgZone) {}

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  showError = false;
  errorMessage = '';
  isSuccess = false;

sendEmail() {
  const { name, email, subject, message } = this.formData;

  // Validation
  if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
    this.errorMessage = 'All fields are required!';
    this.showError = true;
    this.isSuccess = false;

    setTimeout(() => (this.showError = false), 4000);
    return;
  }

  const ownerEmail = "abryon.edu@gmail.com";

  const emailSubject = encodeURIComponent(subject);

  const emailBody = encodeURIComponent(
    `Name: ${name}\n` +
    `Email: ${email}\n\n` +
    `Message:\n${message}`
  );

  const mailtoLink = `mailto:${ownerEmail}?subject=${emailSubject}&body=${emailBody}`;

  window.location.href = mailtoLink;

  // Optional success message
  this.isSuccess = true;

  setTimeout(() => {
    this.isSuccess = false;
    this.formData = { name: '', email: '', subject: '', message: '' };
  }, 3000);
}

}
