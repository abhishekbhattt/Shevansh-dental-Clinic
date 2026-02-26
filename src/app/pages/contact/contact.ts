import { Component } from '@angular/core';
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
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  sendEmail() {
    const { name, email, subject, message } = this.formData;

    const ownerEmail = "abryon.edu@gmail.com"; // doctor’s email

    // Professional preload text with emojis
    const preloadText =
      "📩 Shivansh Dental Clinic – Contact Form Submission\n\n";
    const footerText =
      "\n\n──────────────────────────────\n" +
      "🏥 Shivansh Dental Clinic\n" +
      "📍 Dehradun, Uttarakhand\n" +
      "📧 info@shivanshdental.com\n" +
      "📞 +91-XXXXXXXXXX\n" +
      "──────────────────────────────";

    // Structured subject line
    const emailSubject = encodeURIComponent(`🦷 Website Inquiry – ${subject}`);

    // Structured body with preload + client details + footer
    const emailBody = encodeURIComponent(
      preloadText +
      `👤 Name: ${name}\n` +
      `📧 Email: ${email}\n\n` +
      `💬 Message:\n${message}` +
      footerText
    );

    const mailtoLink = `mailto:${ownerEmail}?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;
  }
}
