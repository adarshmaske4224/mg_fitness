import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements AfterViewInit {

  @ViewChild('mainnavbar', { static: true })
  navbar!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Navbar animation
    tl.from(this.navbar.nativeElement, {
      y: -100,
      opacity: 0,
      duration: 1
    });

    // Hero text animations
    tl.from('.line-1', {
      x: -80,
      y: -60,
      opacity: 0,
      duration: 0.8
    }, '-=0.3')

    .from('.line-2', {
      scale: 0.8,
      opacity: 0,
      duration: 0.6
    }, '-=0.4')

    .from('.line-3', {
      y: 60,
      opacity: 0,
      duration: 0.8
    }, '-=0.3');
  }
}
