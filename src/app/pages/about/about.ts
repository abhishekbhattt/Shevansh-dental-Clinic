import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  standalone: true, // if you’re using standalone components
   imports: [CommonModule]
})
export class About implements OnInit {

  // Dynamic values
  clinicName = 'Shivansh Dental Clinic';
  clinicLogo = 'assets/images/about-hero.png';

  patientsTreated = 500;
  yearsExperience = 15;
  dentalExperts = 1;

  doctor = {
    name: 'Dr. Kusum Thapliyal',
    designation: 'Chief Dental Surgeon',
    description: 'With over 15 years of experience in cosmetic dentistry and implants, Dr. Gupta is dedicated to creating beautiful, healthy smiles with gentle care.',
    profileImage: 'assets/images/doctor-profile.png',
    workingImage: 'assets/images/doctor-at-work.png'
  };

 values = [
  { title: 'Compassion', description: 'We treat every patient with empathy and respect.', icon: 'assets/images/core-value-1.png' },
  { title: 'Excellence', description: 'We strive for the highest standards in dental care.', icon: 'assets/images/core-value-2.png' },
  { title: 'Integrity', description: 'We are honest, transparent, and trustworthy.', icon: 'assets/images/core-value-3.png' },
  { title: 'Innovation', description: 'We use cutting-edge technology for painless treatments.', icon: 'assets/images/core-value-4.png' }
];

certifications = [
  { title: 'ISO Certified Clinic', logo: 'assets/images/certificate-01.png' },
  { title: 'ADA Membership', logo: 'assets/images/certificate-02.png' },
  { title: 'National Dental Accreditation', logo: 'assets/images/certificate-03.png' }
];

  constructor() {}

  ngOnInit(): void {}
}
