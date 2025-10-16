import { NgClass } from '@angular/common';
import { Component,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [NgClass,CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
  progress = 0; // progress bar width in percent

  showBackToTop = false; // Back to Top visibility

  ngAfterViewInit(): void {
    // Optional: update progress bar on load
    this.updateProgressBar();
  }

  // Listen to window scroll events
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateProgressBar();
    this.toggleBackToTop();
  }

  updateProgressBar(): void {
    console.log("hi");
    
    const article = document.querySelector('.blog-content') as HTMLElement | null;
    if (!article) return;

    const articleTop = article.offsetTop;
    const articleHeight = article.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;

    const progressValue = Math.min(
      Math.max((scrollTop - articleTop + windowHeight) / articleHeight, 0),
      1
    ) * 100;

    this.progress = progressValue;
  }

  toggleBackToTop(): void {
    this.showBackToTop = window.pageYOffset > 30;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  goToHomepage(): void {
    console.log('Navigating to homepage...');
    // In a real Angular app, you can use Router
    // this.router.navigate(['/']);
  }
}
