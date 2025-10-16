import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  currentSlide = 0;
  totalSlides = 5;
  autoSlideInterval: any;

  ngAfterViewInit(): void {
    this.startAutoSlide();

    // Add click handlers for navigation links
    document.querySelectorAll<HTMLAnchorElement>('.nav-links a').forEach(link => {
      link.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        console.log('Navigating to:', link.textContent);
      });
    });

    // Add click handlers for auth buttons
    document.querySelectorAll<HTMLButtonElement>('.btn').forEach(btn => {
      btn.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        console.log('Auth action:', btn.textContent);
      });
    });

    // Add click handlers for news cards
    document.querySelectorAll<HTMLElement>('.news-card').forEach(card => {
      card.addEventListener('click', () => {
        const title = card.querySelector('h3')?.textContent || 'Unknown';
        console.log('Opening article:', title);
      });
    });

    // Add click handlers for read more links
    document.querySelectorAll<HTMLAnchorElement>('.read-more').forEach(link => {
      link.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const title = link.closest('.news-card')?.querySelector('h3')?.textContent || 'Unknown';
        console.log('Reading more about:', title);
      });
    });
  }

  updateCarousel(): void {
    const slides = document.getElementById('carouselSlides');
    if (slides) {
      slides.style.transform = `translateX(-${this.currentSlide * 14.28}%)`;
    }
  }

  nextSlide(): void {
    const slides = document.getElementById('carouselSlides');
    if (!slides) return;

    if (this.currentSlide === this.totalSlides - 1) {
      this.currentSlide++;
      slides.style.transform = `translateX(-${this.currentSlide * 14.28}%)`;

      setTimeout(() => {
        slides.style.transition = 'none';
        this.currentSlide = 0;
        slides.style.transform = `translateX(-${this.currentSlide * 14.28}%)`;

        setTimeout(() => {
          slides.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
      }, 500);
    } else {
      this.currentSlide++;
      this.updateCarousel();
    }

    this.resetAutoSlide();
  }

  previousSlide(): void {
    const slides = document.getElementById('carouselSlides');
    if (!slides) return;

    this.currentSlide--;

    if (this.currentSlide < 0) {
      slides.style.transition = 'none';
      this.currentSlide = this.totalSlides - 1;
      slides.style.transform = `translateX(-${this.currentSlide * 14.28}%)`;

      setTimeout(() => {
        slides.style.transition = 'transform 0.5s ease-in-out';
      }, 50);
    } else {
      this.updateCarousel();
    }

    this.resetAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => this.nextSlide(), 2000);
  }

  resetAutoSlide(): void {
    clearInterval(this.autoSlideInterval);
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }
}
