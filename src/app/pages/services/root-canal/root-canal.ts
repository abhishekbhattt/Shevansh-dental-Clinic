import { Component } from '@angular/core';

@Component({
  selector: 'app-root-canal',
  imports: [],
  templateUrl: './root-canal.html',
  styleUrl: './root-canal.css',
   standalone:true
})
export class RootCanal {
   playVideoFullscreen() { const video: HTMLVideoElement | null = document.getElementById('rootCanalVideo') as HTMLVideoElement; if (video) { video.muted = false;
   video.play();
    if (video.requestFullscreen) { video.requestFullscreen(); }
   } } 

}
