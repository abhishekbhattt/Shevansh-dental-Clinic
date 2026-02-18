import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  HostListener,
  ElementRef,
  ViewChild
} from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { Appointment } from '../../components/appointment/appointment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [RouterModule,Appointment,CommonModule],
  standalone:true
})
export class Home implements OnInit, OnDestroy {

  // Fixed counters
  yearsExperience = 15;
  patientsTreated = 5000;
  dentalExperts = 50;

  // Hero Images
  heroImages = [
    'assets/images/hero.png',
    'assets/images/hero1.png',
    'assets/images/hero2.png',
    'assets/images/hero3.png',
    'assets/images/hero4.png',
    'assets/images/hero5.png'
  ];
  currentHeroIndex = 0;
  currentHeroImage = this.heroImages[this.currentHeroIndex];
  isFading = false;

  // Testimonials
  testimonials = [
    { name: 'Rahul Sharma', review: 'Excellent treatment and very friendly staff!' },
    { name: 'Priya Mehta', review: 'Best dental clinic experience ever.' },
    { name: 'Ankit Verma', review: 'Clean clinic and painless treatment.' }
  ];
  currentTestimonialIndex = 0;
  isTestimonialFading = false;
   

  // Scroll Tilt
  @ViewChild('heroContainer') heroContainer!: ElementRef;

  // Subscriptions
  private heroSub?: Subscription;
  private testimonialSub?: Subscription;

  constructor(private cd: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
    this.startHeroSlider();
    this.startTestimonialAutoSlide();
  }

  ngOnDestroy(): void {
    this.heroSub?.unsubscribe();
    this.testimonialSub?.unsubscribe();
  }

  // HERO IMAGE SLIDER
  startHeroSlider() {
    this.heroSub = interval(3000).subscribe(() => {
      this.isFading = true;
      setTimeout(() => {
        let nextIndex = Math.floor(Math.random() * this.heroImages.length);
        while (nextIndex === this.currentHeroIndex) {
          nextIndex = Math.floor(Math.random() * this.heroImages.length);
        }
        this.currentHeroIndex = nextIndex;
        this.currentHeroImage = this.heroImages[this.currentHeroIndex];
        this.isFading = false;
        this.cd.detectChanges();
      }, 500);
    });
  }

  // TESTIMONIAL SLIDER
  startTestimonialAutoSlide() {
    this.testimonialSub = interval(3000).subscribe(() => {
      this.isTestimonialFading = true;
      setTimeout(() => {
        this.currentTestimonialIndex =
          (this.currentTestimonialIndex + 1) % this.testimonials.length;
        this.isTestimonialFading = false;
        this.cd.detectChanges();
      }, 500); // half of CSS fade duration
    });
  }

  // Manual Testimonial Controls
  getNextTestimonial() {
    return (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }

  getPrevTestimonial() {
    return (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  // 3D TILT ON SCROLL
  @HostListener('window:scroll', [])
  onScroll() {
    if (!this.heroContainer) return;

    const rect = this.heroContainer.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const centerY = rect.top + rect.height / 2;
      const offsetY = (windowHeight / 2 - centerY) / (windowHeight / 2);

      const rotateX = offsetY * 10;
      const rotateY = offsetY * 5;
      const scale = 1 + Math.abs(offsetY) * 0.05;

      const heroImg = this.heroContainer.nativeElement.querySelector('.hero-img');
      if (heroImg) {
        heroImg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
        if (scale > 1.02) {
          heroImg.classList.add('pop-out');
        } else {
          heroImg.classList.remove('pop-out');
        }
      }
    }
  }

  @HostListener('window:scroll', [])
  onScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach((el: any) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 100) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }

  isAppointmentOpen = false;

openAppointment() {
  this.isAppointmentOpen = true;
  document.body.classList.add('overflow-hidden'); // prevent scroll
}

closeAppointment() {
  this.isAppointmentOpen = false;
  document.body.classList.remove('overflow-hidden');
}

}
