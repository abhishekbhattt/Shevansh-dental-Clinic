import { Component } from '@angular/core';

@Component({
  selector: 'app-cleaning',
  imports: [],
  templateUrl: './cleaning.html',
  styleUrl: './cleaning.css',
   standalone:true
})
export class Cleaning { playVideoFullscreen() { const video: HTMLVideoElement | null = document.getElementById('cleaningVideo') as HTMLVideoElement; if (video) { video.muted = false;
   video.play();
    if (video.requestFullscreen) { video.requestFullscreen(); }
   } } 
  
  }
