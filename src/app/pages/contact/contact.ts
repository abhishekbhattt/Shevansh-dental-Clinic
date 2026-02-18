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

  // ✅ Validation
  if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
    this.errorMessage = 'All fields are required!';
    this.showError = true;
    this.isSuccess = false;

    setTimeout(() => (this.showError = false), 4000);
    return;
  }

  // ✅ Show green success alert FIRST
  this.isSuccess = true;
  this.showError = false;

  // ✅ Delay email sending by 3 seconds
  setTimeout(() => {

    emailjs.send(
      'service_nlh5qdr',
      'template_azye94q',
      {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        author: 'Shevansh Dental Clinic, Dehradun'
      },
      'EwNyxIgCTrfBfawTW'
    ).then(
      (result: EmailJSResponseStatus) => {
        console.log('SUCCESS!', result);

        this.ngZone.run(() => {
          this.formData = { name: '', email: '', subject: '', message: '' };

          // Hide green alert after 5 seconds
          setTimeout(() => (this.isSuccess = false), 5000);
        });
      },
      (error) => {
        console.error('FAILED...', error);

        this.ngZone.run(() => {
          this.isSuccess = false;
          this.errorMessage = 'Failed to send message. Please try again.';
          this.showError = true;
          setTimeout(() => (this.showError = false), 5000);
        });
      }
    );

  }, 3000);
}

}
